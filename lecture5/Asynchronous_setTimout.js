/* Even a 0ms timeout moves code to the asynchronous queue.
This prevents blocking and allows other functions to run first. */

function operation1(){ //prints Hello
    console.log('Hello');
}

function operation2(){
    operation1(); // Calls operation1() again → prints Hello
    setTimeout(() => { //Schedules the loop using setTimeout
        for(let i = 0; i < 5; i++)
        {
            console.log(i);
        }
        console.log('Hej');
    }, 0);
}

function operation3(){ //prints Ciao
    console.log('Ciao');
}

operation1();
operation2();
operation3()

/*Output:
Hello
Hello
Ciao
0
1
2
3
4
Hej

Step-by-step execution:
1. operation1() → prints Hello
2. operation2()
    - Calls operation1() again → prints Hello
    - Schedules the loop using setTimeout
3. operation3() → prints Ciao
4. Now all synchronous code is done.
5. The event loop executes the delayed callback:
    - Prints numbers 0–4
    - Prints Hej
 */