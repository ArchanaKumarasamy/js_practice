// Displaying an object's properties on the console

var movie1;
var movie2;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "outside out",
  actors:"surya,SK",
  directors:"manirathanam,bharathiraja"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

var blogpost={
  title: " out",
  actors:"vijay,SK3",
  directors:"shanker,bharathi"
};
console.log("Movie information for " + blogpost.title);
console.log("------------------------------");
console.log("Actors: " + blogpost.actors);
console.log("Directors: " + blogpost.directors);
console.log("------------------------------");




/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */