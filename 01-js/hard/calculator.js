/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
function validate(str){
  let replarr = "()+-*/.";
  for(let i=0;i<replarr.length;i++){
    str =str.replaceAll(`${replarr[i]}`,'');}
    if(parseInt(str).toString().length<str.length){
      return true;
    }
    
  }


function left_end(str,index){
      while(parseInt(str[index-1]).toString().length==1 || str.slice(index-1,index)=="."){
          
        index--;
      }
      
      return index;
    }
function right_end(str,index){
      while(parseInt(str[index+1]).toString().length==1 || str.slice(index+1,index+2)=="."){
        index++;
      }
      return index;
    }
class Calculator {
  constructor(result){
    this.result=0;
  }
  add(num){
    this.result+=num;
  }
  subtract(num){
    this.result-=num;
  }
  multiply(num){
    this.result*=num;
  }
  divide(num){
    this.result/=num;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
 calculate(str){
    let strnew = str.split(" ").join("");
    let self=this;
    if(validate(strnew)){
      throw Error;
    }
    let first,second=0;
    
    while((second<strnew.length)){
      let u;
      
      if(strnew.slice(first,first+1)=="("){
        
        while(second<strnew.length){
          if(strnew.slice(second,second+1)=="("){
            first=second;
          }
          if(strnew.slice(second,second+1)==")"){
            u=self.calculate(strnew.slice(first+1,second));
            
            strnew=strnew.replace(strnew.slice(first,second+1),u.toString());
             
            
            second=0;
            break;
          }
          second++;
        }
      }
      second++;
      first=second;
      
    }
    
   
    //console.log(strnew.length);
    for(let i=0;i<strnew.length;i++){
        //console.log(strnew.length);
        //console.log("hi")
      if(strnew[i]=='*'){
        //console.log("himul")
        //console.log(left_end(strnew,i));
        if((right_end(strnew,i)+1)!=strnew.length){
        strnew=strnew.replace(strnew.slice(left_end(strnew,i),right_end(strnew,i)+1),((parseFloat(strnew.slice(left_end(strnew,i),i)))*(parseFloat(strnew.slice(i+1,right_end(strnew,i)+1)))).toString());
        }
        else{
        strnew=strnew.replace(strnew.slice(left_end(strnew,i)),((parseFloat(strnew.slice(left_end(strnew,i),i)))*(parseFloat(strnew.slice(i+1)))).toString());
        
        }
        i=0;
      }
      if(strnew[i]=='/'){
        if((right_end(strnew,i)+1)!=strnew.length){
            strnew=strnew.replace(strnew.slice(left_end(strnew,i),right_end(strnew,i)+1),((parseFloat(strnew.slice(left_end(strnew,i),i)))/(parseFloat(strnew.slice(i+1,right_end(strnew,i)+1)))).toString());
            }
            else{
            strnew=strnew.replace(strnew.slice(left_end(strnew,i)),((parseFloat(strnew.slice(left_end(strnew,i),i)))/(parseFloat(strnew.slice(i+1)))).toString());
            
            }
            i=0;
      }
    }
    
    for(let i=0;i<strnew.length;i++){
      if(strnew[i]=='+'){
        if((right_end(strnew,i)+1)!=strnew.length){
            strnew=strnew.replace(strnew.slice(left_end(strnew,i),right_end(strnew,i)+1),((parseFloat(strnew.slice(left_end(strnew,i),i)))+(parseFloat(strnew.slice(i+1,right_end(strnew,i)+1)))).toString());
            }
            else{
                
            strnew=strnew.replace(strnew.slice(left_end(strnew,i)),((parseFloat(strnew.slice(left_end(strnew,i),i)))+(parseFloat(strnew.slice(i+1)))).toString());
            
            }
            i=0;
      }
      if(strnew[i]=='-'){
        if((right_end(strnew,i)+1)!=strnew.length){
            strnew=strnew.replace(strnew.slice(left_end(strnew,i),right_end(strnew,i)+1),((parseFloat(strnew.slice(left_end(strnew,i),i)))-(parseFloat(strnew.slice(i+1,right_end(strnew,i)+1)))).toString());
            }
            else{
            strnew=strnew.replace(strnew.slice(left_end(strnew,i)),((parseFloat(strnew.slice(left_end(strnew,i),i)))-(parseFloat(strnew.slice(i+1)))).toString());
            
            }
            i=0;
      }
    }
    if(strnew.length==1){
      this.result=parseFloat(strnew);
    }
    return parseFloat(strnew);
  }
}

module.exports = Calculator;
