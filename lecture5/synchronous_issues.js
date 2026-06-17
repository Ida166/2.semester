/*This teaches that synchronous operations run one after another and block execution until 
they finish.

Key points:
    JavaScript executes code line by line.
    Each function must finish before the next one starts.
    If one operation (like a long loop) is slow, it blocks everything after it.
    Because JavaScript is single-threaded, it cannot run multiple pieces of code at the same time.
    This can cause problems like a slow website, even if later code doesn’t depend on the slow part.
So the lesson is:
    When tasks take a long time, synchronous code can freeze or delay other tasks.
    To avoid this, we use asynchronous programming so slow operations don’t block everything else.*/

 function operation1(){ 
        console.log('Hello');
}

function operation2(){
    operation1();
    for(let i = 0; i < 1000000; i++){
    console.log(i);
    }
    console.log('Hej');
}

function operation3(){
    console.log('Ciao');
}
operation1();
operation2();
operation3()