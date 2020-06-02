// Control Flow
/**
 * 
 * CONTROL FLOW:
 *
 * 0. The interpreter reads code like a story, from top to bottom, left to right. 
 * We can direct the interpreter to read code further by specifying actions to be
 * performed under specified conditions. We accomplish this by using if/else if/else
 * statements and switch cases. 
 *
 *
 * 1. IF-ELSE-ELSE IF STATEMENTS
 * 
 *    a. If/else-if/else statements are used to evaluate if a condition is true. If it is true, 
 *    then an action is executed, or another specified action occurs. The interpreter runs through
 *    the code until it finds a condition that evaluates to true.
 * 
 */     let age = 30; // We declare a variable to use in our conditional statement
 
        if(age === 21){ // The 'if' keyword is used to tell the interpreter we are beginning
                       // an if statement. Curly braces are placed after and our code is placed inside.
                       // If this condition is not true, then the code goes down to the else-if statement.
            console.log("You may enter.");
            
        } else if(age < 21){ // The 'else if' keyword tells the interpreter we have another
                             // condition to look for and execute another action if the first
                             // condition is not met. If this statement is not true, the code
                             // goes down to the final else statement.
            console.log("Go away!");
            
        } else { // The 'else' keyword with curly braces after it runs a default action
                 // if none of the above conditions are met.
            console.log("C'mon in, old-timer!");
        }

/**
 *
 * 2. SWITCH STATEMENTS
 * 
 *   a. Switch statements work similarly to if/else if/else statements in that the interpreter reads
 *   the code looking for conditional statements that evaluate to true. The interpreter evaluates values
 *   to the case values which consist of a specific block of code. If the value meets the conditions needed
 *   to match the case value, then the block of code runs. If no cases match the test value, then the default
 *   case runs. 
 * 
 *   b. We use switch over if/else if/else statements when we are comparing multiple conditions or when we
 *   have multiple values that use the same code. We can also use switch statements to accomplish the same
 *   task as if/else if/else statements.
 *
 *   c. STRUCTURE OF SWITCH STATEMENT
 */
      let holiday = "Mother's Day"; // This is the value we are checking for in our switch statement.

      switch(holiday) { // Place value in parantheses
          
        case "New Year's Eve": // The case value we are testing against
        console.log("Happy New Year!"); // If our test value matches the case value, this message
                                        // logs to the console.
        break; // No match, so it continues to the next case value...
        
        case "Thanksgiving":
        console.log("Indigenous People's Day is October 12th. Never forget!");
        break; // No match...
        
        case "Mother's Day": // We have a match!
        console.log("Happy Mother's Day!"); // This message logs to the console
        break;
        
        case "Mardi Gras": // The code keeps running to see if this case value also matches
        console.log("Where are y'all watching the parades? Is there a bathroom nearby?");
        break; // No match, so only the message above is logged to the console.
        
        default:
        console.log("I am not familiar with that holiday. Perhaps a Google search is a good idea.");
        break;
      }
