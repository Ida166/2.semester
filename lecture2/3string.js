/* Strings and their Properties
- Trying to add a new property to a string doesn’t stick.
- Values of type string, number, and Boolean are not objects, and though the language 
doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties.
- The values are immutable and cannot be changed.
- Compared to arrays and objects, which are mutable. */

console.log("coconuts".slice(4, 7)); //> nut
console.log("coconut".indexOf("u")); //> 5
console.log("one two three".indexOf("ee")); //> 11
console.log("  okay \n ".trim()); //> okay
var string = "abc";
console.log(string.length); //> 3
console.log(string.charAt(0)); //> a
console.log(string[1]); //> b

//Rest parameters
/*  - It can be useful for a function to accept any number of arguments. 
    - For example, Math.max computes the maximum of all the arguments it is given
    - To write such a function, you put three dots before the function’s last parameter
    - When such a function is called, the rest parameter is bound to an array containing all further arguments*/

function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number> result) result = number;
    }
    return result;
}
console.log(max(4,1,0, -2)); // -> 9