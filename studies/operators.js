// Operators

/*
 * OPERATORS:
 *
 * 0. Operators are symbols in code we use to perform specific actions upon our data.
 Different operators accomplish different tasks, they include: assignment, arithmetic,
 comparison, logical, uniary, and ternary operators.
 * 
 * 1. TYPES OF OPERATORS
 
 *      > The ASSIGNMENT OPERATOR
 
            a. The assignment operator is invoked by using "="
 */         let assignString = "assignment operator example.";
            let assignNumber = 9000;
            
/**
 *          b. There is also a shorthand assignment operator: "+=" which
 *          is used when manipulating strings and in arithmetic operations.
 *
 */         let concatThis = "This is an ";
            concatThis += assignString; // Prints "This is an assignment operator example."
            
            let number = 900;
            number -= 100;// Prints 800

/**     > ARITHMETIC OPERATORS are used to solve mathematical calculations.
 *
 *          1. "+" is used for addition.
 */         console.log(4 + 20); // Prints 24
            
//          2. "-" is used for subtraction.
            console.log(20 - 4); // Prints 16
            
//          3. "*" is used for multiplication.
            console.log(6 * 9); // Prints 45
            
//          4. "/" is used for division.
            console.log(9 / 3); // Prints 3
            
//          5. "%" is used to find a remainder.
            console.log(90 % 19); // Prints 14
            
            
/*      > COMPARISON OPERATORS compare values and return a Boolean.
 *
 *          1. "<" compares if one value is less than another value.
 */         console.log(100 < 10); // Prints false
            
//          2. "<=" compares if one value is less than or equal to another value.
            console.log(100 <= 100); // Prints true
            
//          3. ">" compares if one value is greater than another value.
            console.log(100 > 10); // Prints true
            
//          4. ">=" compares if one value is greater than or equal to another value.
            console.log(100 >= 101); // Prints false
            
//          5. "==" compares if two values are the same regardless of datatype.
            console.log("20" == 20); // Prints true despite the different datatypes.
            
//          6. "===" compares if two values are the same and are of the same datatype.
            console.log("20" === 20); // Prints false BECAUSE the values are different datatypes.
            
/**         7. "!" - the bang operator negates the values following it. When used in
 *          comparison operations, it is expressed as "!=", looking for values that are
 *          not equal, or "!==" for values that are not strictly equal. This is also 
 *          used as a LOGICAL operator.
 */         console.log("30" != 30); // Prints false
            console.log("30" !== 30); // Prints true

            
/*      > LOGICAL OPERATORS evaluate two values for truthiness and return a Boolean.
 *
 *          1. "&&" evaluates if both values are true.
 */         console.log("cat" == "cat" && 100 > 99); // Returns true

//          2. "||", evaluates if only one of the values is true.
            console.log("Cat" === "cat" || 200 < 100); // Returns true
            console.log(200 >= 300 || 300 < 200); // Returns false

/*      > UNARY OPERATORS 
 *           
 *          1. "typeof" prints a value's datatype as a string.
 *          The syntax is typeof and your value after.
 */         console.log(typeof "Kristiana"); // Prints "string"
            console.log(typeof true); // Prints "boolean"
            
/*          2. "delete" removes a specified index from an array or key/value pair from
 *          an object. 
 */         var deleteAProperty = {
     
            name: "Krissy",
            currentlyWatching: "Buzzfeed Unsolved: Paranormal",
            currentlyListeningTo: "N/A"
            
            }; 
            
            delete deleteAProperty.currentlyListeningTo;
            // Removes currentlyListeningTo: "N/A"
/**
 *          3. INCREMENT OPERATOR increments a value by 1. We use this in loops for
 *          our incremental condition.
 */         for(let i = 1; i < 6; i++ ) {
                console.log(i);
                }; 
/**
 *          4. DECREMENT OPERATOR decreases values by 1, and we use this to loop 
 *          backwards.
 */         for(let i = 5; i > 0; i--) {
                console.log(i);
                };

/*      > TERNARY OPERATOR is shorthand for if/else if/else statements.
 *
 *          TERNARY SYNTAX: (condition ? value if true : value if false)
 */         let age = 65;
            let seniorCitizenDiscount= (age >= 55) ? "25% off your meal!" : "Sorry, no discount today."; 
            console.log(seniorCitizenDiscount); // Prints "25% off your meal!"