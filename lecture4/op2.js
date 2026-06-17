/* Exercise 2:

Extend the function from exercise 1 so that if we run 

repeatText("Hi ", -3);

the function should throw a RangeError exception. This exception handling should work for 
all negative numbers.*/

function repeatText(string, repetition){

    if(repetition < 0){
        throw new RangeError(`The number ${repetition} is not a valid range.`); //Throwing immediately stops the function and sends the error to any try…catch that’s surrounding it.
    }
    console.log(string.repeat(repetition));
}

try{ //The try block runs your function normally.
    repeatText("Hi ", -3);
} catch (error){ //If repeatText throws an error, the catch block catches it.
    console.log("An error has occured");
    console.log(error.name); // name is RangeError from line 13
    console.log(error.message); // Shows the custom message explaining the error
}

