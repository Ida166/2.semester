/* Exercise 2: Copy and sort array

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.

Example:
- let arr = ["HTML", "JavaScript", "CSS"];
- let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes) */


let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    return [...arr].sort();
}; 

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)