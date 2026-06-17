/* Exercise 4:

Use setInterval to create a repeating timer. It should 
print a number every second, starting from 1. */

function repeat(number, interval, repeatings){
    let counter = 0;
    const id = setInterval(() => {counter++, console.log("One second has passed.");
        if(counter == repeatings){ //Check after each printing
        clearInterval(id); //Stops the setInterval
        }
    }, interval); // the function setInterval returns  the interval id, number of times executed
   
    
}
repeat(3, 1000, 4);

/* setInterval function

Its general form:

setInterval(callbackFunction, delayInMilliseconds);
    - callbackFunction → the function you want to run each interval
    - delayInMilliseconds → how often to run it (time between runs, in ms)

() => { ... }
    - This is an arrow function, which is used here as the callbackFunction.
    - () → parentheses for parameters of the function (here we have none, so it’s empty)
    - => → arrow, separates parameters from function body
    - { ... } → function body, contains the code that will execute each interval
    - ; → separates statements

, interval
    - After the function, you have a comma.
    - This separates the first argument (callback function) from 
      the second argument (delay) in the setInterval function call.

const id =
    - setInterval returns an ID that represents this interval.
    We store it in id so we can later call clearInterval(id) to stop it.



for the function above:

// 1️⃣ Declare a variable to store the interval ID
const id = setInterval(
    // 2️⃣ CALLBACK FUNCTION → this code runs every interval
    () => {                     
        // 3️⃣ Statements inside the callback
        counter++;                                    // increment counter
        console.log("One second has passed.");       // print message
        
        // 4️⃣ Conditional check inside callback
        if (counter == repeatings) {                 
            clearInterval(id);                        // stop interval when done
        }                                           
    },                                              
    // 5️⃣ INTERVAL PARAMETER → how often to run the callback (ms)
    interval                                        
); */