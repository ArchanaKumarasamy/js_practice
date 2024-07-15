const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const emptySet = new setInterval();
console.log(emptySet);

const numberSet = new Set();
for (let ii=0; i <=10; i++){
    numberSet.add(i);
}
console.log(numberSet);

numberSet.delete(5);
console.log(numberSet);
const stringArray = ['apple','banana','cherry','date','elderberry']
const stringSet = new Set(stringArray);
console.log(stringSet); 

const countryMap = new Map();
countries.forEach(country => {
  countryMap.set(country, country.length);
});
console.log(countryMap);

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country