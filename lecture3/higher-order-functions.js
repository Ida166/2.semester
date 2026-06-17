/* Callback functions
- We define a function ask() which asks the user a question
- Based on user’s response, execute either the yes() or no() functions
- So the showYes() and showNo() functions are callbacks */

function ask(question, yes, no){
    
    if(confirm(question))
    {
        yes();
    }else{
        no();
    }
}

function showYes(){
    alert("Yes.");
}

function showNo(){
    alert("No.")
}

ask("Do you agree?", showYes, showNo);


/*Arrow functions
- We can define a function and then assigning it to a variable
- There is a short form of this, called an arrow function
- Can define functions anonymously for use with array methods such as map, filter, reduce and forEach */

let show = function(i)
{
console.log(i);
}
show(99); // 99

let ashow = (i) => console.log(i);
ashow(88); // 88


/* forEach:Abstracting Array Traversal

- forEach is available as a standard method on arrays.
- Since the array is already provided as the thing the method acts on,
- forEach takes only one required argument:the function to be executed for each element. */

let array = ["Alpha", "Beta", "Gamma"];
array.forEach( i => console.log(i) );

let printElement = function(element)
{
    console.log(element);
}
array.forEach( printElement);

/* filter: apply a condition  to each element - Creates a new array with elements that meet a certain condition
Example:
• Iterates through each word in the words array.
• The condition word.startsWith("a") checks if the 
word starts with the letter "a".
• Only the words "apple" and "avocado" meet this 
condition, so they are included in the new array. */

let words = ["apple", "banana", "cherry", "avocado", "blueberry"];
// Filter words that start with an 'a'
let awords = words.filter(word => word.startsWith("a"));
console.log(awords); // [ "apple", "avocado" ]


/* map: call a function on each element
- Iterates over an array and transform its elements into a new array.
- It doesn't modify the original array but returns a new one
Example: The .map() function goes through each element 
in the numbers array.
• It applies the arrow function (number => number * number), which squares each number.
• The result is a new array [1, 4, 9, 16, 25]. */

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map( number => number * number );
console.log(squaredNumbers);
