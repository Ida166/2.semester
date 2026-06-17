/* Then, define an array with integers: [5, 6, 9, 19, 42].
The task is to write a function which removes an element of the array and concatenates the 
resulting arrays together. */

let numbers = [5, 6, 9, 19, 42];
let pivot = 2;

function concatArray(numbers, pivot)
{
    let firstHalf = numbers.slice(0, pivot); //starte fra begyndelsen og slutte ved pivot
    let secondHalf = numbers.slice(pivot+1); 
    console.log(firstHalf); // [5, 6]
    console.log(secondHalf); //[19, 42]

    //printer det samlede array minus det i midten 
    let combinedArray = firstHalf;
    for(let index in secondHalf){
        console.log(secondHalf[index]);
        combinedArray.push(secondHalf[index]);
    }
    return combinedArray;
}
let result = concatArray(numbers, pivot);
console.log(result);