// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };

  var spaces = function(spaceLength){
    var spaceString = " ";
    spaceLength = Math.max(0,spaceLength);
    spaceLength = Math.min(40,spaceLength);
    return spaceString.substr(0,spaceLength);
  };
  
  var emptyBox = function (width)  {
    width = Math.max(0, width);
    width = Math.min(40, width);
    if (width < 2) {
        console.log("Width must be at least 2 to draw a box.");
        return;
    };
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));
  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */