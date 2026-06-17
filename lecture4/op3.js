/* Exercise 3:

Use setTimeout to schedule printing two different string using console.log.

The first string should be: "One second has passed." and it should be printed after one second.

The second string should be: "Two seconds have passed." and it should be printed after two seconds.

Reflect on these two questions for this exercise:

(1): What happens if you switch the delays (2 seconds first, 1 second afterwards)?

(2): Could you achieve the same effect using a loop? Why or why not?*/ 


function delay(string1, delay1, string2, delay2){
    setTimeout(() => {console.log(string1);}, delay1);
    setTimeout(() => {console.log(string2);}, delay2);
}


delay("One second has passed.", 2000, "Two seconds have passed.", 1000);