// Using the square function

var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};
square(10);
square(-2);
square(1111);
square(0.5);


cube = function(numberTocube){
  var result;
  result = numberTocube * numberTocube;
  console.log(numberTocube + " * " + numberTocube + " = " + result);
};
cube(11);
cube(12);
cube(13);
cube(14);

squareRoot = function(numberTosquareRoot){
  var result;
  result = numberTosquareRoot * numberTosquareRoot;
  console.log("numberTosquareRoot of " + numberTosquareRoot + " is " + result);
};
squareRoot(9);
squareRoot(15);
squareRoot(17);
squareRoot(6);




/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */