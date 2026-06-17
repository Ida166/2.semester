/* 
Define an array with strings: ["Tesla", "BYD", "Mercedes"]
Use map to get an array with the lengths of the string*/
let carArray = ["Tesla", "BYD", "Mercedes"];

let lengths = carArray.map( car => car.length );

console.log(lengths);

/* MapObject
- Define an array with three objects
- Use map to get a new array with the brand names
- using map to extract members of an arra of objects */

let carObjects = [
  {id: 1, brand: "Tesla", cost: 10000},
  {id: 2, brand: "BYD", cost: 8000},
  {id: 3, brand: "Mercedes", cost: 12000}
];

let carNames = carObjects.map( car => car.brand );
console.log(carNames); //[ "Tesla", "BYD", "Mercedes" ]

/* reduce: combine elements into a single value
- Processes an array and reduce it to a single value, such as a sum, product, or even an object

Example:
• .reduce() takes two parameters: an accumulator 
(which stores the running total) and the 
currentNumber (the current element being 
processed).
• The 0 at the end is the initial value of the accumulator.
• It iterates through the array, adding each number to the accumulator.
• The result is 15, which is the sum of all numbers in the array. */

let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((sum, current) => sum + current, 0); //sum er det endelige resultat vi får ud
console.log(total); //output 15


