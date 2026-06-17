/*In this exercise, you will create a function delayedMessage(msg, delay).
This function should take two arguments msg and delay, and return a 
Promise that resolves after delay milliseconds. 

The expected output after 1 second should then be:
Hello after 1 second
*/




function delayedMessage(msg, delay)
{
    // Add code here to resolve a message after a delay.
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(msg), delay);
    })
}
//Example usage:
delayedMessage("Hello after 1 second", 1000)
    .then(result => console.log(result));



