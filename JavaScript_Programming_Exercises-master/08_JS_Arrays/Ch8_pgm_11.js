// Finding the total shopping bill


var costs = [ 1.99, 4.95, 2.50, 9.87 ];
var numOfEach = [ 2, 1, 5, 2 ];

var getTotalBill = function (itemCosts, itemCounts) {
	var total = 0;

	itemCosts.forEach(function (count, i) {
		total += count * itemCounts[i];
	});

	return total;
};



console.log("The total cost is $" + getTotalBill(costs, numOfEach));

var items = [
	{ cost: 1.99, numberBought: 2 },
	{ cost: 4.95, numberBought: 1 },
	{ cost: 2.50, numberBought: 5 },
	{ cost: 9.87, numberBought: 2 },
	{ cost: 3.99, numberBought: 3 }
  ];
  
  
  var getTotalBillFromItems = function (items) {
	var total = 0;
  
	items.forEach(function (item) {
	  total += item.cost * item.numberBought;
	});
  
	return total;
  };
  
  console.log("The total cost is $" + getTotalBillFromItems(items));
  

/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */