/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function duplicate(outputarr,category){
    for(let i=0;i<outputarr.length;i++){
      if(category==outputarr[i]["category"]){
        return true
      }
    }
    return false
}


function calculateTotalSpentByCategory(transactions) {
  class output{
    constructor(category,totalSpent){
      this.category=category;
      this.totalSpent=totalSpent;

    }}
    let outputarr=[];
    for(let i=0;i<transactions.length;i++){
      let obj=new output(transactions[0]["category"],0);
        outputarr[0]=obj;
      if(!duplicate(outputarr,transactions[i]["category"])){
        let obj1=new output(transactions[i]["category"],0);
        outputarr.push(obj1);
      }
    }
    for(let i=0;i<outputarr.length;i++){
      let price=0
      for(let j=0;j<transactions.length;j++){
        if(outputarr[i]["category"]==transactions[j]["category"]){
          price+=transactions[j]["price"]
        }
      }
      outputarr[i]["totalSpent"]=price;
    }
    return outputarr;
  }
  

module.exports = calculateTotalSpentByCategory;
