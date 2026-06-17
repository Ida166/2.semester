/* Exercise 3: Flattening an array

Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
// → [1, 2, 3, 4, 5, 6] */


function flatten(arr){

    let flattened = arr.reduce((numbers, currentValue) => {return numbers.concat(currentValue)}) 
    return flattened;
}
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));

//accumulator → det, du bygger op
//currentValue → det nuværende element i loopet(næste array i rækken)
//concat = lægger arrays sammen


