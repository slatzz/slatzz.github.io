// Functions

/**
 * FUNCTIONS:
 *
 * 0. Functions are code written by developers that perform an action upon values. Functions can optioinally take 
 * a given input and return a desired output. We declare a function by using the 'function' keyword before we begin 
 * writing our code. The parts of a function are the 'function' keyword, name, parameters, a return statement. There are two steps to
 * using functions. First, we declare a function using the 'function' keyword, and secondly, we invoke functions
 * by calling it using the function name and putting parantheses after them.
 *
 *
 * 1. DECLARING AND INVOKING FUNCTIONS
 * 
 *      > FUNCTION DECLARATION
 *          
 *          a. Declare a function using the 'function' keyword
 */          function foo() {
        
              return "I am a function!";
              
              } // Just a declaration, no output
              
            // Another example
            function bar(param1, param2) {
                   
              return param1 + param2;   
                   
            } // No output here either!
/** 
 *      > FUNCTION EXPRESIONS and INVOCATION
 * 
 *          a. Function expressions can look like:
 */          const funcName = function(numParam) {
        
              return numParam++;
              
              }; // This has no output
  
//          b. Invoking the functions with arguments to return an output
            foo(); // Prints "I am a function!"
            bar("Kristiana", " Llanos"); // Prints "Kristiana Llanos"
            funcName(6); // Prints 7
  
/**     > PARAMETERS VS. ARGUMENTS
 * 
 *          a. Parameters are placeholders for the input values we intend on performing
 *          an action upon. It is best practice to use descriptive parameters when
 *          declaring the function to give future programmers an idea of what kind of 
 *          input value or datatype to use when invoking the function.
 * 
 *          b. Arguments are the input values on which the function performs an action. 
 *          The parameters will give the programmer an idea of what datatype the input value
 *          should be when invoking the function. Based on what action the function performs, 
 *          these arguments may or may not be what is returned.
 * 
 *      > OPTIONAL INPUTS
 * 
 *          a. Functions can optionally take inputs and return a single value, even if 
 *          it has multiple parameters/arguments. When writing pseudocode for future
 *          programmers reading our code, it is helpful to pseudocode out the intended
 *          inputs, outputs, constraints, and edge cases for our function. 
 * 
 *          b. This includes:
 *              Input: List your parameters, or the number of or type of datatypes being passed.
 *              Output: The value returned, any datatype.
 *              Constraints: Specify how to build your function.
 *              Edge cases: Considerations for the programmer based on conditions
 *              one can run into based on the values they are passing through the function.
 */


/** 2. SCOPE: Function scopes are local to their block of code.
 */ 
       let globalScope = "Access me!!";
       
              function scopeExample() {
                     
              globalScope = "What will log to the console?";
              
       }
              console.log(globalScope); /** Logging to the console outside of the function
              will cause global hoisting and the global variable will be logged to the console.
*/
              scopeExample(); // Prints "Access me!!"; 
              
/**     Placing console.log within the function scope allows the variable assigned locally
 *     to be logged to the console.
 */
       globalScope = "Can you access me?";
       
              function localScopeExample() {
                     
              globalScope = "I'm the new variable in charge!";
              
              console.log(globalScope);
       }
              localScopeExample(); // Prints "I'm the new variable in charge!"
/* 3. CLOSURES are nested functions that have access to their parent function's variables.   
 *  
 */    function parentFunc() {
        
       var counter = 0; // This variable belongs to the parentFunc scope

              function childFunc() {
              counter = counter + 10; // Notice, the childFunc function has access to the
              return counter;         // parentFunc's counter variable
  } // Closing the childFunc's scope
       return childFunc;
} // Closing the parentFunc's scope

       var counterResult = parentFunc(); // Assigning the parentFunc to a variable
       console.log(counterResult()); // Prints 10
       console.log(counterResult()); // Prints 20
       console.log(counterResult()); // Prints 30