/** Scope
 * 
 * SCOPE
 * 
 * 0. Scope in Javascript can be described as where variables are available in our
 * code based on their placement. Scopes act as a boundary for our variables as to 
 * keep our code organized and perform readable actions for our interpreter. 
 * 
 * 1. TYPES OF SCOPE
 * 
 *   > GLOBAL SCOPE
 * 
 *      a. The global scope is the area outside of blocks of code.
 * 
 *      b. Variables declared with 'var' are globally scoped and available anywhere in the
 *      code, with the exception of variables declared with 'var' within a function's 
 *      local scope.
 * 
 */     // This is the global scope:
        var globalVariable = "Can you see me?"; // Declared in global scope
        let letVariable = "How about me?" // Declared in global scope
        
        for(let i = 0; i < 3; i++){ // Curly brace intiates a block scope
            console.log(globalVariable);
            console.log(letVariable);// We can use these variables because they were
            // declared within the global scope and not within a different scope.
        } 
/**
 *      Prints: "Can you see me?"
 *              "How about me?"
 *              "Can you see me?"
 *              "How about me?"
 *              "Can you see me?"
 *              "How about me?"
 * 
 * 
 * 
 *
 *   > LOCAL SCOPE
 * 
 *      a. Local scopes are the boundaries within a function's block of code. Variables 
 *      declared within a local scope are not accessible if called globally. They must be 
 *      called and used within their scope. Functions declared within another function's
 *      scope have access to the variables declared in the "parent" scope. These functions
 *      are called closures.
 */     
        // Global scope!
        function parentFunc(value1){
            
            // Local Scope
            let print1 = "Hello";
            console.log(value1);
            
            function childFunc(value2){
                
                // Another local scope!
                let print2 = " World"
                console.log(value1 + value2);
            }
            
            childFunc(); // Invoke the childFunc in the parentFunc's local scope
        }
        
        parentFunc(); // Invoke the parentFunc in the global scope
/**
 *      Prints:       "Hello"
 *                    "Hello World"
 *
 * 
 * 
 * 
 *   > BLOCK SCOPE
 * 
 *      a. Block scopes are the area within if/else if/else and switch statements, indicated
 *      by curly braces and the area within for/while loops, also indicated by curly braces.
 * 
 *      b. Because 'var' is globally scoped, variables declared with 'var' within 
 *      blocks are still globally scoped.
 * 
 *      c. Variables declared with 'let' and 'const' create a local scope when they are
 *      declared within blocks. 
 */     
        var example = true;
        
        if(example === true){
            
            var globalScope = "I am globally scoped!"; // This variable can be accessed
            // outside of this if block statement
            
            let localScope = "I am now locally scoped."; // This variable is only available
            // within the if statement
            
            const alsoLocal = "I am not available outside of this block."; 
            // This const variable is also not available beyond this if statement.
        }
        
        console.log(globalScope); // "I am globally scoped!"
        // console.log(localScope) // RefError: localScope is not defined
        // console.log(alsoLocal) // RefError: alsoLocal is not defined
/**
 * 
 * 
 *   > FINAL QUESTION WE ARE SUPPOSED TO ANSWER
 * 
 *      When our global variable has the same name as a parameter, this is not ideal coding. 
 *      It is best practice to name our parameters something different than our global variables.
 *      
 *      Thus, if we name our parameter the same name as a global parameter, we will be accessing
 *      our parameter and NOT our global variable.
 * 
 */     var global = "Hey";

        function whatWillHappen(global){ // Parameter is also named 'global'
            console.log(global); // This will log whatever we input as our 'global' parameter.
        }

        whatWillHappen(global); // When we invoke the function, the global variable is logged
        // and "Hey" is logged to the console.
        
        whatWillHappen("Hello world!"); // "Hello world!" is now logged to the console.
       