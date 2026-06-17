//Named Properties - dot

let events = ["work", "television"];
let day = { //day er et objekt med to keys 
    events: events,
    squirrel: false
};

//printer i consolen 
console.log(day.events); //> ["work", "television"] - man tilgår objektet ved brug af dot notation
console.log(day.squirrel); //> false
console.log(events.length); //> 2


//Properties - bracket

let random = {
  1: "one",
  "2": 2,
  "john doe": "unknown"
};

let x = 1;
//tilgå et objects værdier med kantet parentes 
console.log(random[x]) //> "one" - man kan også tilgå en værdi med kantede parentes
console.log(random["2"]) //> 2
console.log(random["two"]) // > undefined
console.log(random["john doe"]); // > "unknown"

//Objects
/*  - Reading a property that doesn’t exist will 
      produce the value undefined.
    - It is possible to assign a value to a property by using the = operator.
    - This will replace the property’s value if it already existed or create a new property on 
    the object if it didn’t. */

let schedule = { //har to keys en array og en boolian 
tasks: ["read", "write"],
active: false
};

console.log(schedule.tasks); //> ["read", "write"]
console.log(schedule["tasks"]); //> ["read", "write"]
console.log(schedule.holiday); //> undefined
schedule.holiday = true;
console.log(schedule.holiday); // > true

//Delete
//The delete operator remove a property from the specified object
delete schedule.tasks; // tasks bliver slettet
console.log("tasks" in schedule); //Tjekker om tasks stadig er i objectet - det er det ikke = false
console.log("active" in schedule); //Tjekker om active stadig er i objectet - det er det = true

//The in operator
/* This operator can be used for checking object membership (previous slide)
It can also be used in loops
We loop over all keys in the object */

let fruits = {
  "apple": 10,
  "orange": 8,
  "pear": 12
};
for (let key in fruits)
{
  console.log(fruits[key]);
}


