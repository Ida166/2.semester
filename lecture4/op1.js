/* Exercise 1:

Write a function, repeatText, that takes a string and repeats it a certain number of times. 

For example, if we run 

repeatText("Hi ", 3);

the output should be

Hi Hi Hi 

For this exercise, you can assume that the repetition parameter is positive.*/

function repeatText(string, repetition){
    console.log(string.repeat(repetition));
}

repeatText("Hi ", 3);