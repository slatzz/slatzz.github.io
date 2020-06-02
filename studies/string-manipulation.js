/** String manipulation
 *
 * 0. Strings are a datatype that consist of characters between quotation marks. There are many
 * built-in functions in Javascript that allow us to change and manipulate these strings.
 *  
 * 1. STRING CONCATENTATION USING OPERATORS
 *   a. As mentioned in other sections, we use operators to join strings together, "+" and "+=".
 */  let string1 = "String one";
     let string2 = "string two";
     console.log(string1 + " and" + string2); // "String one and string two"
     console.log(string1 += string2); // "String onestring two"
   
/**
 * 2. MANIPULATING STRINGS WITH STRING METHODS
 *
 *   a. As mentioned above, there are built-in methods developers can use to manipulate
 *   strings. They range from extracting specific indexes from strings to changing the case
 *   of the string. 
 */ 
 let exampleString = "Kristiana Llanos";
 
/** Here are examples of some of the string methods commonly used in Javascript:
 * 
 * .charAt() returns the character at a specified index.
 */ console.log(exampleString.charAt(6)); // The variable holding the string comes before the method
 // This will print "a"

// .concat() concatenates strings together.
    console.log(exampleString.concat("!")); // "Kristiana Llanos!"

// .split() - Splits a string and turns it into an array.
    console.log(exampleString.split()); // ["Kristiana Llanos"] 
// To split the individual characters, split the spaces in the string.
    console.log(exampleString.split(" ")); // ["K", "r", "i", "s", "t", "i", "a", "n", "a", "L", "l", "a", "n", "o", "s"]

// .toLowerCase() converts all characters to lowercase. 
    console.log(exampleString.toLowerCase()); // kristiana llanos

// .toUpperCase() converts all characters to uppercase.
    console.log(exampleString.toUpperCase()); // KRISTIANA LLANOS