/** Hoisting
 * 
 * 0. HOISTING
 * 
 *      a. Hoisting refers to the order in which the code is available to the interpreter. 
 *   Our code is hoisted based on what datatype it is. For variables specifically, variable 
 *   declarations are hoisted to the top of their scope and their assignments are hoisted 
 *   following the declaration.
 * 
 * 1. ORDER OF THE HOIST
 * 
 *      a. Function declarations 
 *  
 *      b. Variable declarations
 * 
 *      c. Variable assignments
 * 
 *      d. Function expressions
 * 
 * 2. EXAMPLE
 */ 
        var globalVariable = "I am globally scoped";
        
        function hoistExample(){
            
            if(!globalVariable){
                
            globalVariable = "Now, I'm local to the function";
            
            }
            
            console.log(globalVariable);
        }
        
        hoistExample();
        
/**     > HOIST ORDER 
 *      
 *          1. function hoistExample(){
            
                    if(!globalVariable){
                
                        globalVariable = "Now, I'm local to the function";
                    }
            
                    console.log(globalVariable);
                }
        
            2. var globalVariable;
            
            3. globalVariable = "I am globally scoped";
            
            4. hoistExample();
            
       > WHAT IS LOGGED?
       
            "I am globally scoped" is printed to the console because the var globalVariable was
            assigned before the function was invoked. 
            
            If the globalVariable was assigned after hoistExample() was invoked, then "Now, I'm local to the function"
            would be logged.
 */
        
        