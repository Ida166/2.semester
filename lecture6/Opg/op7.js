/*Advanced event handling

Exercise 7:
Write a page that displays a balloon (using the balloon emoji, 🎈). 
When you press the up arrow, it should inflate (grow) 10 percent, 
and when you press the down arrow, it should deflate (shrink) 10 percent.

You can control the size of text (emoji are text) by setting the font-size 
CSS property (style.fontSize) on its parent element. Remember to include a 
unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the 
keys change only the balloon, without scrolling the page.

When that works, add a feature where, if you blow up the balloon past a certain size, 
it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and 
the event handler is removed (so that you can’t inflate or deflate the explosion). */

   
let balloon = document.getElementById("balloon"); //store element with id="balloon" in variable balloon
let size = 50; //Sets the initial font size for the balloon to 50 pixels.

function handleKeys(event){ //The function receives an event object that contains information about the key pressed
    checkExplosion(); //Calls another function to see if the balloon is too big and should explode.
    if(event.key == "ArrowUp"){
        inflate();
        event.preventDefault(); //stops the default behavior (like scrolling the page).
    }
    else if(event.key == "ArrowDown"){
        deflate();
        event.preventDefault();
    }
};

window.addEventListener("keydown", handleKeys); //Tells the browser: “Run the handleKeys function whenever a key is pressed.”
                                                //window listens globally for key presses. When a key is pressed, the event object is passed to handleKeys
function inflate(){
    size *= 1.1; //10%større
    balloon.style.fontSize = size + "px";
}
function deflate(){
    size *= 0.9; //10% mindre
    balloon.style.fontSize = size + "px";
}
function checkExplosion(){
    if(size > 200){
        balloon.textContent = "💥";
        window.removeEventListener("keydown", handleKeys); //stop listening to key presses, so the balloon can’t grow/shrink anymore.
    }
}