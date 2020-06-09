//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    // Return the object's values in an array
    return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    // Convert object keys to strings in array
        // Use join method to extract strings from array
    return Object.keys(object).join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    // Create a new variable and assign it an array literal
    let vals = [];
    
    // Loop through the object to check the value datatypes
    for(let key in object){
        if(typeof object[key] === "string"){ // Push value into new array if it is a string
            vals.push(object[key]);
        } 
    }
    // Return the values as strings
    return vals.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // Use Array.isArray() to check collection and return "array"
    if(Array.isArray(collection)){
        return "array";
     // Use typeof to check collection and return "object"   
   } else if(typeof collection === "object"){
       
        return "object";
   }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

// Use .toUpperCase() to capitalize first letter
    // Use substring function to concat rest of string back onto it
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // Split string into array
    let stringArray = string.split(" ");
    
    // Create a variable to hold capitalized strings in new array
    let capitalizedAll = [];
    
    // Loop through string to access each first index of every word
    for(let i = 0; i < stringArray.length; i++){
        // Capitalize each first letter as it iterates through loop
        capitalizedAll.push(stringArray[i][0].toUpperCase() + stringArray[i].substring(1));
        }
    // Join new array and return string
    return capitalizedAll.join(" ");
    }
    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    // Place name prop in new variable
    let name = object.name;
    
    // Capitalize name property's first letter and slap rest of name back onto it
    let cappedName = name[0].toUpperCase() + name.substring(1);
    
    // Return welcome message
    return "Welcome" + " " + cappedName + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
   // Place species prop in new variable 
   let species = object.species;
   // Place name prop in new variable
   let name = object.name;
    
   // Capitalize first letter of name and species to create profile message
   return name[0].toUpperCase() + name.substring(1) + " " + "is a" + " " + 
   species[0].toUpperCase() + species.substring(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
  // Create a variable to hold the noises array
  let noiseArr = object.noises;
  
  // Check if the object contains a noises prop
  if(object.hasOwnProperty("noises") === false){
      // Return "there are no noises" if true
      return "there are no noises";
      // Check if the noises array in object contains elements
     } else if(!object.noises.length){
          // Return "there are no noises if false"
          return "there are no noises";
        // Return noises in array if it contains elements  
      } else if(noiseArr.length > 0){
          
    // Create a variable to hold the noises array joined
    let noiseStr = noiseArr.join(" ");
      
      return noiseStr;
  } 

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

 // Split the string into an array
 let stringArray = string.split(" ");
    // Use includes method to check if the array includes the word
    if(stringArray.includes(word)){
        // Return true if the word is in the array
        return true;
     
    } else{
        // Return false if the word is not included
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // Takes a name and an object
        // Add the name to the object's friend's array
            // Return the updated object
        object.friends.push(name);
        
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // Create a variable to hold the friends array
    let friends = object.friends;
    
    // Check for empty object or if the friends array does not include the friend name
    if(friends === undefined || friends.includes(name) === false) {
       // Return false if conditions apply
       return false;
   }
   // Return true if the friend is included in the friends array
   return true;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   // Create a new variable and assign it to an array literal 
    let notMyFriendList = [];
    
    // Loop through the friends array
    for(let i = 0; i < array.length; i++){
    // Create variable to access the friends array
    let userFriends = array[i].friends;
    // Create variable to access the person's name
    let userName = array[i].name;
        // Check if the person has at least 1 friend
            // Check if the array does not include the target name
                // Check if target name does not match the person's name
        if(userFriends.length > 0 && userFriends.includes(name) === false 
        && name !== userName){
            // If all true, push target name into new array
            notMyFriendList.push(userName);
          // If the person has no friends
            // And if the target name does not match the person's name
        } else if(userFriends.length === 0 && name !== userName){
            // Push all names into new array
            notMyFriendList.push(userName);
        }
    }
    // Return the final array 
    return notMyFriendList;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
// Check if object.hasOwnProperty(key) and if TRUE, assign object to key to value
    // If FALSE, object to key = value;
if(object.hasOwnProperty(key) || !object.hasOwnProperty(key)){
        object[key] = value;
    }   // Return the updated object
        return object;
    }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
// Loop thru array
for(let i = 0; i < array.length; i++){
    // Check if the array contains elements and if the object contains the current element
    if(array.length > 0 && object.hasOwnProperty(array[i])){
        // Delete the object prop/current element using the delete function
        delete object[array[i]];
    }
    
}   // Return the updated object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    // Create a new array to hold the singular values
    let allDaSingleLadies = [];
    
    // Loop thru array to push unmatching values into new array
    for(let i = 0; i < array.length; i++){
        // Check if the current index is unique   
        if(array[i] !== array[i + 1] && array[i] !== array[i + 2]){
            // If no match, push value into array    
            allDaSingleLadies.push(array[i]);
            
            }
        }
        // Return the new array with no duplicates
        return allDaSingleLadies;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}