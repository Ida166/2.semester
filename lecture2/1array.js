
let values  = [2, 4, 5, 7 ,11];

let arrayValues = values[1]; 

let arrayLength = values.length; // giver længden af arrayet her 5

console.log(arrayLength); //printer 5

//push - Adds an element to the end of the array
let stack = [2, 4];
stack.push(999); // tiljøjer elementet 999 til arrayet
console.log(stack); // > [2, 4, 999]

//Pop - Removes an element from the end of the array
let lastElement = stack.pop(); // fjerner det sidste element 
console.log(stack); // [2, 4]
console.log(lastElement); //999

//shift - Removes the first element of the array and returns it
let queue = [3, 5];
queue.push(888);
console.log(queue); // [3, 5, 888]
let firstElement = queue.shift(); // fjerner 3  
console.log(firstElement); 

//unshift - Add an element to the beginning of the array
let queue1 = [3, 5];
queue1.unshift(777);
console.log(queue); // [777, 3, 5];


//slice -  takes start and end indices and returns an array that has only the elements between them
// The start index is inclusive, the end index exclusive. When the end index is not given, slice will take all of the elements after the start index
console.log([0,1,2,3,4].slice(2,4)) //[2,3] (left)
console.log([0,1,2,3,4].slice(2)) //[2,3,4] (right)

// for string
let myString = "Hello world";
let stringLength = myString.length; // retunerer 11 som er længden 
console.log(stringLength); // printer 11


//Print element fra et array
let array = [5, 6, 7, 8, 9];
let element = array[2]; //acces third element
console.log(element);

//itterere over et array 
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Define nested array
let nestedArray = [[5, 6], [7, 8]];

//print the element "6"
console.log(nestedArray[0][1]);

//sletning af et element 
let array2 = ["I", "am", "here"];
array2.splice(1, 1);
console.log(array2);

//indsætnintg af element
let array3 = ["My", "name", "is"];
array3.splice(3, 3, "Ida");
console.log(array3);

//Searching an array for specific elements
//indexOf - Searches for the first occurrence of an element in an array, starting from either the beginning or from specified index

let array4 = [3, 5, 9, 11, 19];

//gives the index of a the value you are searching fore
let index = array4.indexOf(9, 1);
console.log(index); // output 2

//includes - Searches for the first occurrence of an element in an array, starting from either the beginning or from specified index
let found = array4.includes(9, 1);
console.log(firstElement); // output true

//lastIndexOf - Searches for the first occurrence of an element in an array, starting from either the end or from specified index
let indexLast = array4.lastIndexOf(9, 3);
console.log(indexLast); // Output 2
