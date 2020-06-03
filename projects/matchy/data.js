/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Assign animal to an object literal
animal = {};

// Add a property to the object using dot notation
animal.species = "Cat";

// Add a property to the object using the bracket notation
animal["name"] = "Fluffernutter";

// Add a property with an array literal as its value
animal.noises = [];

// Log the animal object to the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Assign noises an empty array
noises = [];

// Use bracket notation to add an element 
noises = ["Meow"];

// Use an array method to add an element to back of array
noises.push("Hiss");

// Use another array method to add element to front of array
noises.unshift("Ag ag ag");

// Use bracket notation to add another element
noises[noises.length] = "Mowww";

// Log the length to the console
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Use bracket notation to add the new array to the object
animal.noises = noises;
console.log(animal);

// Add another noise to the array
animal.noises.push("Purr");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a new variable and assign it to an array literal
animals = [];

// Push the animal object into the new array
animals.push(animal);
console.log(animals);

// Create a new animal to add to the animals array
var duck = {
    species: "Duck", 
    name: "Jerome", 
    noises: ["Quack", "Honk", "Sneeze", "Woosh"] 
};

// Push duck into the animals array
animals.push(duck);

// Log animals to the console
console.log(animals);

// Add two more animals to the animals array

var dragon = {
    species: "Dragon",
    name: "Queeny",
    noises: ["Fire", "Growl", "Roar", "Hissss"]
};

animals.push(dragon);

var mermaid = {
    species: "Mermaid",
    name: "Ariel",
    noises: ["Blubb blubb", "Sing", "Ah oooh ahhh", "Silence"]
};

animals.push(mermaid);

// Log the array to the console
console.log(animals);
// Log the length of the array to the console
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** 'friends' will be an array to hold the list of strings holding the animal's friends. Arrays are ideal
 * for holding lists.
 */
 
 // Assign 'friends' to an array literal
 var friends = [];
 
 // Create a function that retrieves random animals
 function getRandom(array){
     /** Use Math.floor( to round down the random number we are accessing
      * with Math.random()
      * Multiply this result by the length of the array so the 
      * random number generator knows how many indices to choose from
      */ 
     return Math.floor(Math.random()) * array.length;
 }

// Push a random name onto one of the animals
friends.push(animals[getRandom(animals)].name);

// Log friends to the console
console.log(friends);

// Add the friends array to the animal object
animal["friends"] = friends;

// Log the animal object to the console
console.log(animal);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}