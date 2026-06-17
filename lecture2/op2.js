/* Reversing an array
Arrays have a reverse method that changes the array by inverting the 
order in which its elements appear. For this exercise, write two functions, 
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array 
as argument and produces a new array that has the same elements in the inverse 
order. The second, reverseArrayInPlace, does what the reverse method does: it 
modifies the array given as argument by reversing its elements. Neither may use 
the standard reverse method. */

function ReverseArray(arr){
    let resultArray = [];
    for(let i = arr.length -1; i >= 0; i--){
        resultArray.push(arr[i]);
    }

    return resultArray;
}

console.log(ReverseArray([1, 2, 3, 4, 5]));

function ReverseCharArray(arr){
    let resultCharArray = [];
    for(i = arr.length - 1; i >= 0; i--){
        resultCharArray.push(arr[i]);
    }
    return resultCharArray;
}

console.log(ReverseCharArray(["A", "B", "C"]));