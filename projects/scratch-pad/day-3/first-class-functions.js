// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // Create a function to compare the input string with the base value
    let greaterThanBase = function(i) {
        
        return i > base;
    };
    
    // Return the result of the function
    return greaterThanBase;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // Create a function to compare the input string with the base value
    let lessThanBase = function(i){
        
        return i < base;
    };
    // Return the result of the function
    return lessThanBase;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // Create a function to compare the given string with the startsWith value
    let filterFunc = function(string){
        
        // Compare the startsWith value with the first element in string
            // Use the toLowerCase() function to make all characters lowercase
        return string[0].toLowerCase() === startsWith.toLowerCase();
    };
    // Return the result of the function
    return filterFunc;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // Create a new function
    let filterFunc2 = function(string){
    
    // Convert all string characters to lowercase
    let lowStr = string.toLowerCase();
        
        // Compare if the last character in the string matches the endWith character
        return lowStr[lowStr.length - 1] === endsWith.toLowerCase();
    }
    // Return the results of the function
    return filterFunc2;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // I: Array of strings & a function
    // O: An array of modified strings
    
    // Create a new variable to hold the modified strings
    let modifiedStr = [];
    
    // Loop over the array to access each string
    for(let i = 0; i < strings.length; i++){
        
    // Pass the strings through the modify function
    modifiedStr.push(modify(strings[i]));
    }
    
    // Return the modified strings in an array
    return modifiedStr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    // Create a variable to represent the result of the test
    let result = true;
    // Loop over the array of strings
    for(let i = 0; i < strings.length - 1; i++){
       if(!test(strings[i])){
           result = false;
       } 
    }
    // Return the result of the test
    return result;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}