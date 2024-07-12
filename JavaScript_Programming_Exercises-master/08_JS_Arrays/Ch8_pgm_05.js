// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
    "sunday"

  ];
	var visitorArray = monthArray[week - 1];
    return getVisitorReport(visitorArray, dayInWeek);
};


var week1 = [ 354, 132, 210, 221, 481, 152, 199 ];
var week2 = [ 305, 120, 250, 190, 450, 200, 180 ];
var week3 = [ 330, 145, 215, 225, 470, 160, 190 ];
var week4 = [ 310, 130, 230, 200, 440, 180, 170 ];

var month = [ week1, week2, week3, week4 ];

var report = getMonthlyVisitorReport(month, 2, 5); 
console.log(report); 

var report = getMonthlyVisitorReport(month, 3, 1); 
console.log(report); 

var report = getMonthlyVisitorReport(month, 4, 7); 
console.log(report); 

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */