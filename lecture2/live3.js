/*  - Begin by defining an object containing three fruits (apple, orange, pear) along with their 
      respective quantities (12, 14, 16).
    - Write code that sums the quantities of the fruits in the object*/

let fruits = { //array fruits defineret 
    "apple": 12,
    "orange": 14,
    "pear": 16
};

fruits.banana = 18; // her tilføjes en property, a key-value pair 

//sum the quantities
let total = 0;
for(let key in fruits){
    total += fruits[key];
}
console.log("The total amount of fruits is", total);



