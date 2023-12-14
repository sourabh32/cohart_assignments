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


const test =[    {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},    {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'liesure',
  itemName: 'Pizza',
},    {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},      ]

function calculateTotalSpentByCategory(transactions) {
let categories = []
  for(let i =0;i<transactions.length;i++){
    const value = categories.some((item) => item.category.toLowerCase() === transactions[i].category.toLowerCase() ? true :false)
    if(!value){
      categories.push({category:transactions[i].category,totalSpent:transactions[i].price})
      
    }
    else{
     
     categories = categories.map((item) =>
        item.category.toLowerCase() === transactions[i].category.toLowerCase()
          ? { ...item, totalSpent: item.totalSpent + transactions[i].price }
          : item
      );
    }
  }
  return categories;
}

console.log(calculateTotalSpentByCategory(test))

module.exports = calculateTotalSpentByCategory;
