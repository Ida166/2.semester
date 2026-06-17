/* Deep comparison
The == operator compares objects by identity. But sometimes you’d 
prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true 
only if they are the same value or are objects with the same 
properties, where the values of the properties are equal when 
compared with a recursive call to deepEqual.

To find out whether values should be compared directly 
(use the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both 
values, you should do a deep comparison. But you have to take one 
silly exception into account: because of a historical accident, 
typeof null also produces "object".

The Object.keys function will be useful when you need to go over 
the properties of objects to compare them. */ 

function deepEqual(value1, value2){

    //check wether or not the values are things that can't be compared dirrectly (objects). Do they require deep comparison?
    if(typeof(value1) === "object" && typeof(value2) === "object" && value1 != null && value2 != null){
        //get the list of keys from each object. (it returns an array with the keys)
        let value1_keys = Object.keys(value1);
        let value2_keys = Object.keys(value2);
      
        // Objects must have the same number of keys
        if (value1_keys.length !== value2_keys.length) {
            return false;
        }
       
        //Recursivly compare each property value
        for(let key of value1_keys){ //loops over the elements in the array value1_keys that are the keys/properties from the object fx (Age, Height)
            if(!value2_keys.includes(key) || !deepEqual(value1[key], value2[key])){ //Checks if the second object has the same key/property as object 1. The it recursivley compare the values stored under that key
                return false;                                                         // if the values are objects themself recursion will breack them down further
            }
        }
        
        return true;
    }

    //tjecks if the two values are the same value
    if(typeof(value1) === typeof(value2)){
        if(value1  === value2){
            return true;
        }
    }


}

let obj = {here: {is: "an"}, object: 2}
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));