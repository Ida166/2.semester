/* 1. Create an array styles with items “Jazz” and “Blues”.
   2. Append “Rock-n-Roll” to the end.
   3. Replace the value in the middle with “Classics”. 
   4. Strip off the first value of the array and show it.
   5. Prepend Rap and Reggae to the array */

let styles = ["Jazz", "Blues"]; 
styles.push("Rock-n-Roll"); 
console.log(styles);
styles[1] = "Classics"; //Ersatter det mindsterste element 
console.log(styles);
let firstValue = styles.shift(); //tager første værdi 
console.log(firstValue); //printer den første værdi
styles.unshift("Reggae"); //sætter reaggea ind forest i arrayet
styles.unshift("Rap"); //sætter Rap ind forest i arrayet
console.log(styles);
