/** Loops
 * 
 * 
 * LOOPS:
 *
 * 0. Loops are code that runs continuously through our input data and runs based on a specified
 * starting condition, stopping condition, and increment. NOTE: If we do not set a stopping condition,
 * the loop runs infinitely and could potentially crash our program! 
 *
 * 1. TYPES OF LOOPS:
 *
 *    > WHILE LOOPS
 * 
 *      a. While loops run code while a specified condition remains true. One example of when we might use a while
 *      loop is when we do not know when to stop the code, such as when one is driving a car and cannot anticipate 
 *      when to press the breaks. 
 */             let milesPerHour = 70;
                let speedLimit = 75;
                while(milesPerHour >= 70 && milesPerHour <= 75 && speedLimit === 75) {
                    console.log("Coast is clear!");
                    milesPerHour++;
                }
/*              Prints "Coast is clear!" until milesPerHour hits 75mph
 *
 *
 *    > FOR LOOPS 
 
        a. For loops run code very similarly to while loops. They are created by specifying a starting condition, 
        a stopping condition, and an incrementer. 
 *  
 *           1. The STARTING CONDITION tells the interpreter where to begin iterating through the code.
 *           2. The STOPPING CONDITION tells the interpreter when to stop iterating through the code.
 *           3. The INCREMENTER tells the interpreter by how much to iterate through the code.
 *              
 */              for(let i = 1; i <= 9; i+=2) { // Starting condition is 1
                 console.log(i);                // Stopping condition is 9        
                 }                              // The interpreter will count every 2nd number
/*               Prints  1
 *                       3
 *                       5
 *                       7
 *                       9
 *            
 *      b. We use for loops to iterate over arrays and strings. Objects specifically use a for-in loop, discussed later.
        We use for loops for arrays to search through the contents of the collection, which is helpful if we do not
        know what the array specifically holds and we are looking for a specific value, or piece of data.
 *              
 *          1. Looping forwards over an array:
 
 */              let loopForwardsArray = ["Loop", "over", "this", "array"]; 
                 for(let i = 0; i <= loopForwardsArray.length; i++) { // Starting condition begins at the first index
                                                                    // Stopping condition is the length of the array
                                                                    // Increment tells the loop to iterate one element at a time
                 console.log(loopForwardsArray[i]); // Log i to the console so we can see the elements as the loop runs
                 };
/*              Prints   "Loop"
 *                       "over"
 *                       "this"
 *                       "array"
 *              
 *          2. Looping backwards over the array.
 *               
 */              let loopBackwardsArray = ["Loop", "backwards", "over", "this", "array"];
                 for(let i = loopBackwardsArray.length - 1; i >= 0; i--) { // Starting condition is the last element in array
                 console.log(loopBackwardsArray[i]);                       // We stop when the loop hits the first element
                 };                                                        // We decrement one element at a time as the loop iterates
/*               Prints  "array"
 *                       "this"
 *                       "over"
 *                       "backwards"
 *                       "Loop"
 *
 *
 *     > FOR-IN LOOPS 
 
        a. As mentioned above, objects use a loop unique to objects. For-in loops iterate over the object's key/value pairs versus
        for loops that iterate over array's indices. 
        
 */             let myBikeObject = { 
                model: "Raleigh",
                year: "2005",
                color: ["Maroon", "Silver"]
                };
                
                for(let key in myBikeObject) { // We declare a key variable to represent the keys we are iterating over
                console.log(key, myBikeObject[key]); 
                }
                /** Prints  model Raleigh
                            year 2005
                            color [ 'Maroon', 'Silver' ]
                */