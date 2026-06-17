//Opgave 1  Looping a triangle
//Write a loop that makes seven calls to console.log to output the following triangle

function looping(){
    let line = "";

    for (let i = 0; i < 6; i++){
        line += "#";
        console.log(line);
    }
}

looping();

//Opgave 2  2. FizzBuzz
/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that 
are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

function FizzBuzz(){

    for( n = 1; n < 100; n++){
        if(n % 3 === 0){
            console.log("Fizz");
        }
        else if(n % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(n);
        }
    }
}

FizzBuzz();

/* Opgave 3 Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it 
works for any size, outputting a grid of the given width and height. */ 

function Chessboard(){

    let userInput_height = prompt("Enter the height of the grid");
    let userInput_width = prompt("Enter width of board");

    let userNumber_height = Number(userInput_height);
    let userNumber_width = Number(userInput_width);

    let string = ""

    if(!Number.isNaN(userNumber_height) && !Number.isNaN(userNumber_width)){
        for(let n = 0; n < userNumber_height; n ++){
            for(let k = 0; k < userNumber_width; k++){
                if((n+k)%2 === 0){
                    string += "#";
                }
                else if((n+k)%2 === 1){
                    string += " ";
                }
            }
            string += "\n";
        }
    
    console.log(string);
    }
}

Chessboard();

/* Opgave 4 Bean Counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be 
a string containing only one character (for example, "b"). The first character has position 0, which causes 
the last one to be found at position string.length - 1. In other words, a two-character string has length 2, 
and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number that indicates how many
uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates 
the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make 
use of this new function. */

// Your code here.

function countBs(string){
    let count = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] === "B"){
            count++; 
        }
    }
    return count;
}

function countChar(string, char){
    let count = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] === char){
            count++; 
        }
    }
    return count;
}

console.log(countBs(prompt("Type in a string")));

console.log(countChar("Hestefoder", "e"));
