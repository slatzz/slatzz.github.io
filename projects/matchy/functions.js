/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a search function

function search(array, name){
    // Loop thru array
    for(let i = 0; i < array.length; i++){ // Check if the name matches the searched name
        if(array[i].name === name){
            // Return the matching OBJECT
            return array[i];
        // If no match is found by the last element in array, return null
        } else if(i === array.length - 1){
            return null;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function called replace
function replace(array, animalName, replAnimalObj){
// Loop thru array 
    for(let i = 0; i < array.length; i++){
        // If name matches the searched animalName, replace with new object
        if(array[i].name === animalName){
            // Use the splice method to remove and replace the objects
            return array.splice(i, 1, replAnimalObj);
        } 
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a function called remove
function remove(array, name){
    // Loop thru the array and find the obj with the target name
    for(let i = 0; i < array.length; i++){
    // Remove animalObj if it consists of the target name
        if(array[i].name === name){
            // Use the splice method to remove the whole object
            return array.splice(i);
        }  
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Check the lengths

// Create a function called add
function add(animals, animal){
    // Check if the object's name and species props have a length greater than 0
    if(animal["name"].length > 0 && animal["species"].length > 0){
        // Loop through the array
        for(let i = 0; i < animals.length; i++){
            // Check if new animal has a unique name
            if(animal.name === animals[i].name){
                // return null if the name is not unique
                return null;
                }
            }  
            // If all other conditions apply, push the new object into the array
            return animals.push(animal);
            
    } else {
        // Return null if the length property is === 0    
        return null;
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
