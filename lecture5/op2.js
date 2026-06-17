/* Create a function, alwaysRejects, that always rejects a 
Promise after a delay, regardless of input. 

The expected output after 1 second should then be:
Failed
*/


function alwaysRejects(msg, delay)
{
    // Add code here to reject after a delay.
    return new Promise(function(resolve, reject){
        setTimeout(() => reject(new Error("Failed")), delay);
    })
}

// Example usage:
alwaysRejects("Just some text", 1000)
    .catch(error => {
        console.log(error.message);
    });
    
