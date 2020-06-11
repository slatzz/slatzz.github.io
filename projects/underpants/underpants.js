// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/




// Input: A value, any value
// Output: Return the given value

_.identity = function(value){
    // Return the input value
    return value;
};




/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/



// Input: Any value
// Export: The value's datatype as a string

_.typeOf = function(value){
    // Create a variable to hold typeof function
    let type = typeof(value);
    
    if(type == "object"){ // Check values that return as objects
        
        if(Array.isArray(value)){ // Check if value is an array
            type = "array";
            return type;
            
        } else if(value === null){ // Check if value is null
            type = "null";
            return type;
        }
    } // Otherwise, return all other datatypes
         return type;
    };



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/**
 * I: An array and a number
 * O: Return an array if input collection is not an array
 *      Return first element in array if input # is NaN
 *          Otherwise return the first number of elements in array
 * C: N/A
 * E: Account for negative integers and if number is greater than length of array
 */
 
 _.first = function(array, number){
     // Check if array is not an array and if number is negative
     if(!Array.isArray(array) || number <= 0){
         return [];
     } 
     // Create a new array
     let elements = [];
     // Loop thru input array
        // Stopping condition includes indices less than input number
     for(let i = 0; i < array.length && i < number; i++){ // Push elements into new array
         elements.push(array[i]);
     } 
     
     if(elements.length === 0){ // If new array is empty
         elements = array[0]; // Return first element of input array
     }
     // Return the final array with first # of elements
     return elements;
 };




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    // Create a new array
    let lastElements = [];
    // Declare i - We will need to change our loop according to different conditions
    let i;
    
    // Check if the input collection is not an array and if the number is negative
    if(!Array.isArray(array) || number <= 0){
        return [];
    } 

    // Check if the number is greater than the length of the array
        // Assign i accordingly for the for loop
            // If the number is not greater than the length, subtract the number of items from the length
    number > array.length ? i = 0: i = array.length - number;

    for(i; i < array.length; i++){ // Push elements into new array
        lastElements.push(array[i]);
    }
    // Return last element if the new array is empty or the input value is NaN
    if(lastElements.length === 0 || isNaN(number)){
        return array[array.length - 1];
    }   // Return the final array
        return lastElements;
    };




/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


/** 
 * Input: An array and a value
 * Output: Return a number representing the index OR return -1
 * Constraints: Do not use .indexOf()
 * Edge cases: Multiple occurrences of the value, or if the value isn't included
 */ 

_.indexOf = function(array, value){
    
  // Loop thru array to check if the value is included in array
    // If included, return index
  for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                return i;
            }   
        }
        // Otherwise, return -1
        return -1;
    };





/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(array, value){
    // Using a ternary operator...
        // Check if the value is in the array, return true or false accordingly
   return array.includes(value) ? true: false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function (collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

/**
 * I: Array
 * O: New array with no duplicates
 * C: _.indexOf()
 * E: N/A
 */
 
 // Loop thru array
    // If _.indexOf(array[i] !== uniqueArray[i])

_.unique = function(array){
    
    // Create a new array
    let uniqueArray = [];
    // Loop thru array to check if the element is included in the given array 
        // If element to be pushed is not already in the new array AND...
            // If the element is not already in the new array, push element into the new array
    for(let i = 0; i < array.length; i++){
        if(!uniqueArray.includes(array[i]) && (_.indexOf(array, array[i]) !== -1)){
            uniqueArray.push(array[i]);
        } 
    }
    // Return final array with unique values
    return uniqueArray;
};



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*
* 
* Input: An array and a function
* Output: New array with truthy elements
* C: Use _.each in the filter function
* E: Result other than true or false
*/

_.filter = function(array, action){
    
// Create a new array
let filtered = [];

// Call _.each on each element, index, and array
_.each(array, function(element, index, array){
    // Push all elements that return true into new array
    if(action(element, index, array)){
     filtered.push(element);
    }
    
    });
// Return the final array with all truthy values
return filtered;
};



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = function(array, action){
    
// Create a new array
let rejects = [];

// Call _.each on each element, index, and array
_.each(array, function(element, index, array){
    // Push all elements that return false into new array
    if(!action(element, index, array)){
     rejects.push(element);
    }
});
// Return the final array with all falsey values
return rejects;
};




/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*
* 
* Input: An array and a function
* Output: An array of 2 subarrays, one truthy elements and one falsey elements
* Constraints: N/A
* Edge cases: Return an array of arrays
*/

// Create three new arrays
    // Final array
    // Truthy array
    // Falsey array
// Loop thru array
    // Pass the function over the elements of the array
        // If true, push to truthy array
        // If false, push to falsey array
        // Finally, push both truthy and falsey array into final array
    

_.partition = function(array, action){
    
// Create a new array to hold the subarrays
let finalArray = [];
// Create a new array for truthy values
let truthyArray = [];
// Create a new array for falsey values
let falseyArray = [];

// Call _.each on each element, index, and array
_.each(array, function(element, index, array){
    // Push all elements that return true into truthyArray and all false elements into falseyArray
    action(element, index, array) ? truthyArray.push(element) : falseyArray.push(element);
    
    });
// Push new arrays into finalArray
finalArray.push(truthyArray, falseyArray);
// Return the final array with the subarrays
return finalArray;
};




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, action){
 
// Create a new array
let mapArray = [];

// Check if collection is an array
if(Array.isArray(collection)){ // Loop thru array and push results of function to new array
    for(let i = 0; i < collection.length; i++){
        mapArray.push(action(collection[i], i, collection));
} // Check if collection is an object
} else if(_.typeOf(collection) === "object"){
    for(let key in collection){ // Loop thru object pushing results of function into new array
        mapArray.push(action(collection[key], key, collection));
    }
} // Return the final mapped array
return mapArray;

};





/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*
* 
* Imput: An array of objects and a property
* Output: Return array containing all the values of the object in an array
* Constraints: Must use _.map
* Edge Cases: N/A
*/

// Create an array for results
// Loop thru array of objects
    // Check if object contains input property
        // If true, map over properties in array
            // Return the mapped array
            
_.pluck = function(arrayOfObjs, prop){
    
    let plucked = [];
    
        //Map over properties in array
       _.map(arrayOfObjs, function(objInArr, i, arrayOfObjs){
                plucked.push(arrayOfObjs[i][prop]);
        });
        
        return plucked;
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*
* 
* Input: A collection and a function
* Output: A boolean
* Constraints: N/A
* Edge cases: What if function doesn't return a boolean? Return 
*             What if the function is not given?
* 
* 
* // Check collection datatype: Array or object?
*   // If array, pass function over e, i, arr
*       // If result of function is true for all elements, return true
*       // Otherwise, return false
*   // If object, pass function over prop, key, obj
*       // If result of function is true, return true
*       // Otherwise, return false
*/

_.every = function(collection, action){
    
    // Create a variable and assign it to true
    let result = true;
    
  // Access collection using _.each function
   _.each(collection, function(element, index, collection){
       
       // Check if action is given and if it is a function
       if(arguments.length > 1 && _.typeOf(action) === "function"){
           // If any actions result to false, result is false
           !action(element, index, collection) ? result = false : result;
       } 
            else { // Return false if any values return false and if no
                    // function is given
                !element ? result = false : result;
            }
       });
            // Return the final result
            return result;
};













/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
* 
*/

_.some = function(collection, action){
    
    // Create a variable and assign it to false
    let result = false;
    
  // Access collection using _.each function
   _.each(collection, function(element, index, collection){
       
       // Check if action is given and if it is a function
       if(arguments.length > 1 && _.typeOf(action) === "function"){
           // If any actions result to true, result is true
           action(element, index, collection) ? result = true : result;
       } 
            else { // Return true if atleast one element returns true
                    // and function is given
                element ? result = true : result;
            }
       });
            // Return the final result
            return result;
};









/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*
* 
* Input: Array, function, seed
* Output: Any value
* Constraints: N/A
* Edge case: What if the seed is not given?
* 
* // Call function over every element in array
*   // Prev result = return value of the function call
*/


_.reduce = function(array, action, seed = array[0]){ // Assign the seed to first element of array as a base 
    // Create a variable and assign it to the seed
    let result = seed;
    // Declare i for future assignment in loop
    let i;
        // In our loop, check if seed was included by checking the arguments' length property
            // Begin loop at first index if included
            // Begin loop at second index if seed was not included
        for(arguments.length === 3 ? i = 0 : i = 1; i < array.length; i++){
            
            // Assign prevResult to return value of function call
            result = action(result, array[i], i);
        } // Return the final call
    return result;
};




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object, ...objects){ // Use spread operator to represent all the other objects
    
    for(let i = 0; i < objects.length; i++){ // Loop thru objects array created by spread op
        
        let currObj = objects[i]; // Variable to hold current object
        
        for(let key in currObj){ // Loop through current object to update properties
            
            // Update object's properties
            object[key] = currObj[key]; 
        }
    }
    // Return final object
    return object;
    
};









//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
