// Datatypes

/**
 * DATATYPES:
 *
 * 0. There are many different types of data we manipulate or work with in programming. The various
 * classifications are called: primitive, or simple, datatypes and complex datatypes. We will look
 * into these different types below.
 *
 *      
 *
 * 1.  PRIMITIVE DATATYPES: Primitive datatypes have distinctive characteristics - they are 
 * immutable (unchangeable), hold 8-bytes of memory, and are copy by value, meaning when they 
 * are assigned to another value or variable, the original value is not changed. Below is an example 
 * of copy by value:
 */     
        let x = 420;
        console.log(x); // Prints 420
        let y = "This is an example of copy by value with another datatype";
        console.log(y); // Prints "This is an example of copy by value with another datatype"
        
        let a = x;
        console.log(a); // Prints 420
        let b = y;
        console.log(y); // Prints "This is an example of copy by value with another datatype"
        
        // When we change the copy, we do not change the original
        a = 900;
        console.log(a, x); // Prints 900, 420
        b = "y is not changed";
        console.log(b, y); // Prints "This is an example of copy by value with another datatype", 
        // "y is not changed"
        
        
/* 2.  PRIMITIVE DATATYPE EXAMPLES: Numbers, strings, booleans, NaN, undefined and Null values. 
 *
 *      >   Numerical data includes whole numbers, negative integers, and numbers with decimal points.:
 
 */         var numberExample = 69; // This is an example of a number.
            console.log(numberExample); // Prints 69
    
//      >   Strings are characters placed inside of quotation marks.:

            var stringExample = "This is a string.";
            console.log(stringExample); // Prints "This is a string."
            
/*          Strings have a length property that tells the user how many characters are in the string.
            Access this property by using the .length method. Access individual characters in a string 
            by placing its index in brackets. Use [0] to access the FIRST character 
            in a string and use .length - 1 to access the LAST character in a string.
            
 */         var example = "Example string";
            console.log(example.length); // Prints 14
            example[0]; // Prints “E”
            example[3]; // Prints "m"
            example[example.length - 1]; // Prints "g"

//      >   Booleans evaluate to true or false:

            var booleanExample = 420 < 69;
            console.log(booleanExample); // Prints false
            
//      >   NaN values are numerical data that are undefined or not a readable number for the interpreter.

            var exampleNan = 50 / "Shades of Grey was a terrible book series.";
            console.log(exampleNan); /* Prints NaN. You cannot perform arithmetic actions with 
            datatypes that are not numbers. 
            */
            
//      >   Undefined data do not hold any values.
            var iAmUndefined;
            console.log(iAmUndefined); /* Prints undefined. The variable is not assigned a value. */
            
//      >   Null is an empty value.
            var exampleNull = null;
            console.log(exampleNull); // Prints null to the console.
/** 
 * 3.  COMPLEX DATATYPES: Complex datatypes have characteristics that make them unique from primitive datatypes.
 * They are mutable and therefore can hold more than 8 bytes of memory and hold various kinds of datatypes.
 * Complex datatypes are copy by reference, therefore copies made from their values are references to the original
 * value. When you change the copy, you change the original value. For example:
 */
        let originalArray = [];
        originalArray.push("Shrek 2 was better than Shrek 1.");
        console.log(originalArray); // Prints ["We are living in a global pandemic."];
        
        /** If we assign a new variable to our originalArray, any changes we make to our original variable affect
         * our new variable, and vice versa.
         */ 
        let copyArray = originalArray;
        originalArray.push("Change my mind.");
        console.log(originalArray, copyArray); 
        /** Prints ["Shrek 2 was better than Shrek 1.", "Change my mind."], 
         * ["Shrek 2 was better than Shrek 1.", "Change my mind."];
         */ 
        
/**4.  COMPLEX DATATYPE EXAMPLES: Arrays, objects, and functions.
 * 
 *      >   Arrays are collections of data and represented by square brackets []. Arrays can hold various
 *          datatypes within one collection as a list. Example below:
 *
 */         var exampleArray = ["String datatype", 4233, false];
/**
 *          Like strings, arrays hold their values at accessible indexes. Indexes are like home addresses of
 *          each value and are numbered beginning at 0. As mentioned in the string section, the FIRST value
 *          is found at the 0 index, and the last index is accessible by using nameOfYourArray.length - 1. 
 * 
 *          Let's use this information to access elements form our exampleArray:
 */             exampleArray[0]; // Prints "String datatype"
                exampleArray[exampleArray.length - 1]; // Prints false
                exampleArray[1]; // Prints 4233
/**
 *              1. MANIPULATING ARRAYS
 * 
 *                  > ADDING ELEMENTS TO ARRAYS:
 * 
 *                      a. Add elements to arrays using BRACKET NOTATION.
 */                     exampleArray[3] = "New element added!";
                        console.log(exampleArray);
                        // Prints ["String datatype", 4233, false, "New element added!"]
                        
/**                     b. Add elements to the FRONT of arrays using the .UNSHIFT() method
 */                     exampleArray.unshift(8675309);
                        // Prints [8675309, "String datatype", 4233, false, "New element added!"]
/**
 *                      c. Add elements to the BACK of arrays using the .PUSH() method
 */                     exampleArray.push(true);
                        // Prints [8675309, "String datatype", 4233, false, "New element added!", true]

/**                 > REMOVING ELEMENTS FROM ARRAYS:
 * 
 *                      a. Remove elements by reassigning specific indices using BRACKET NOTATION.
 */                     exampleArray[0] = null;
                        // Prints [null, "String datatype", 4233, false, "New element added!", true]
/**
 *                      b. Remove elements from the FRONT of the array using .SHIFT() method
 */                     exampleArray.shift();
/**                     // Prints ["String datatype", 4233, false, "New element added!", true]
 * 
 *                      c. Remove elements from the BACK of the array using .POP() method
 */                     exampleArray.pop();
                        // Prints ["String datatype", 4233, false, "New element added!"]
 
/**                                      
 *       >   Objects are another type of collection that can hold different types of data in a list form
 *           via key/value pairs. Objects are represented by placing the key/value pairs within curly 
 *           braces, {}. 
 *
 */          let exampleObject = {
                            
                            Band: "Beach House",
                            Album: "Bloom",
                            Year: 2012,
                            "Best Album by Beach House": true
        
                            };
                            
/**         Objects hold their values in key/value pairs instead of indices. The keys are represented by
 *          strings, whereas the values can be any datatype.
 * 
 *              1. MANIPULATING OBJECTS
 * 
 *                  > ADDING PROPERTIES TO OBJECTS
 * 
 *                      a. Add key/value pairs to objects with BRACKET or DOT NOTATION. ***Dot notation 
 *                      is the preferred method of adding properties to objects.***
 */                     exampleObject.Single = "Myth";
                        exampleObject["Kristiana's Favorite Track"] = "Wild";
 /*                     Prints:
 *
 *                          {
                            
                            Band: "Beach House",
                            Album: "Bloom",
                            Year: 2012,
                            "Best Album by Beach House": true,
                            Single: "Myth",
                            "Kristiana's Favorite Track": "Wild"
        
                            };
                            
                    > REMOVING PROPERTIES FROM OBJECTS
                    
                        a. Remove key/value pairs from an object by using the keyword 'delete' and 
                        dot notation to specify which key/value pair to remove.
 */                     delete exampleObject.Single; // Deletes Single: "Myth" from exampleObject
/**
 *              2. ACCESSING OBJECT PROPERTIES
 * 
 *                  > Access the keys of an object by using Object.keys(yourObjectName);
 */                  Object.keys(exampleObject); // Prints:
/**                              [
                                    'Band',
                                    'Album',
                                    'Year',
                                    'Best Album by Beach House',
                                    'Kristiana's Favorite Track'
                                    
                                ]
/**
 *                  > Access the values of an object using Object.values(yourObjectName);
 */                  Object.values(exampleObject); // Prints:
 /**                            [ 
                                    'Beach House', 
                                    'Bloom', 
                                     2012, 
                                     true, 
                                    'Wild' 
                                ]
 */
/**
 *                  > Access individual properties using BRACKET or DOT NOTATION
 */                  exampleObject.Band; // Prints "Beach House"
                     exampleObject["Album"]; // Prints "Bloom"
/**
 *                  > Use the .hasOwnProperty method to check if a key/value pair exists in the object
 */                  exampleObject.hasOwnProperty("Single"); // Prints false because we deleted it earlier
                     exampleObject.hasOwnProperty("Kristiana's Favorite Track"); // Prints true
  
/**     >   Functions are code written by developers that take a given input and return a desired output. 
 *          We declare a function by using the 'function' keyword before we begin writing our code. 
 *          The parts of a function are the 'function' keyword, name, parameters, a return statement. 
 */         function exampleFunction(num1, num2) {
     
                    return num1 + num2;
                    
                }; 
                
//          > INVOKING A FUNCTION
/**
 *              a. Invoke a function by using its function name and placing arguments within parantheses.
 */             exampleFunction(500, 250); // Prints 750
            

/* 5.  INFINITY AND -INFINITY VALUES:
 *
 *       Infinite and -infinity values represent values that do not equate to an integer that is readable
         by the interpreter. These numbers exceed floating point numbers which means infinity values 
         keep building exponentially and do not land on a number that the interpreter can use. Just like
         when we create an infinite loop, the interpreter cannot work with code that runs infinitely.
         With infinity values, the console is kind enough to print 'Infinity' vs the crashing computer 
         or continuous code we get from infinite loops!
 */      
        var exampleInfinity = 750 / 0;
        console.log(exampleInfinity); // Prints Infinity

// 
