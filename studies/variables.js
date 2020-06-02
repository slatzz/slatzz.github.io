// Variables
/*
 * VARIABLES:
 *
 * 0. Variables are named containers for the data we evaluate, manipulate, analyze,
 and work with in general in Javascript. They hold our information until we call 
 the variables and use them in our code.
 *
 * 1. CREATING VARIABLES
 
     a. Two steps to creating a variable are DECLARING and INTIALIZING the variable.
     
        > DECLARATION - We use three different keywords to declare a variable: var, let, and const.
 */     var varExample; // The variable is declared and named, but it holds no value until we
                        // initialize it to some value of any datatype.
        let letExample;
        const constExample = "Const must be initialized upon declaration, so here we are.";
        
/**     > INITIALIZATION (ASSIGNMENT) - Variables declared with var and let can be declared anywhere in the code
 *      and assigned later. Variables are assigned and re-assigned using the assignment operator "=".
 */     varExample = 100;
        letExample = ["I am an array assigned to a variable declared with 'let'."];
        
        // Let's re-assign a variable:
        varExample = "This variable has now been re-assigned!";
        letExample = {
            theLet: "variable",
            is: "now an object"
        }; // Unfortunately, we cannot re-assign variables declared with const!
/**
 * 2. VARIABLES DECLARED WITH VAR
 * 
 *   a. Variables declared with the 'var' keyword become globally scoped and are accessible 
 *   throughout the code. The only limit to their accessibility is they are bound to function
 *   scopes. Before ES6, they were the only method of declaring variables. Because they are 
 *   globally accessible, this brought forth attention to the issue of user privacy, thus
 *   let and const were created, among other reasons!
 * 
 * 3. VARIABLES DECLARED WITH LET
 * 
 *   a. Variables declared with the 'let' keyword are locally scoped and hoisted to the top
 *   of their scope. These variables are not available until the interpreter reaches the
 *   line of code at which the variable is declared. Like 'var', variables declared with 
 *   'let' can be re-assigned. Like 'const', variables declared with 'let' are NOT globally
 *   scoped. Using 'let' is now the preferred method of declaring variables since ES6 birthed them.
 * 
 * 4. VARIABLES DECLARED WITH CONST
 * 
 *   a. Variables declared with the 'const' keyword are scoped to their block of code and 
 *   must be initialized, or assigned a value, upon declaration. Further, these variables
 *   cannot be re-assigned once they are initialized and they are not available until the
 *   interpreter reaches the line of code at which they were declared.
 *     
 * 5. HOISTING
 * 
 *   a. Hoisting refers to the order in which the code is available to the interpreter. 
 *   Our code is hoisted based on what datatype it is. For variables specifically, variable 
 *   declarations are hoisted to the top of their scope and their assignments are hoisted 
 *   following the declaration.
 */     
      //console.log(hoistExample); // Prints undefined because the variable is declared with 'let'
      // and is not available until the interpreter reaches the line where the variable was declared
      // and intialized.
      //let hoistExample; 
      //hoistExample = "I won't be logged to the console!";
      
      
      hoistWithVar = "I will be logged!"; // Prints "I will be logged!" because variables declared with
      // 'var' are hoisted to the top of the global scope and available before the line at which they
      // are declared.
      var hoistWithVar;
      console.log(hoistWithVar);