/* Exercise 1: Filter a range in an array

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal 
to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.

For instance:
- let arr = [5, 3, 8, 1];
- let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified) */

function filterRange(arr, a, b){
    let resultArray = [];

    for(i = 0; i < arr.length; i++){
        if(arr[i] >= a && arr[i] <= b){
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);