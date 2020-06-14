// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-slatzz");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    
    // Filter thru customer objects
    return _.filter(array, function(customerObj){
        // Return the number of customers who identify as "male"
        return customerObj.gender === "male";
    }).length; // Use length property to return the number of elements in filtered customers array

};

// Input: Array
// Output: Number
// Constraints: N/A
// Edge cases: N/A

var femaleCount = function(array){
    
    // Look thru customers array for female identifying customers
    let count = _.reduce(array, function(prevFem, currFem){
        // Accumulate number of females as the function checks genders
        if(currFem.gender === "female"){
            prevFem++;
        }
        // Return female count
        return prevFem;
        
    }, 0);
    // Return the total count
    return count;
};

var oldestCustomer = function(array){
    
    return _.reduce(array, function(prev, current){
        // Check if the current age is greater than the previous customer's age
        if(current.age > prev.age){ // If so, assign prev age to current age
            prev = current;
        }   // Return the highest age
            return prev;
    }).name; // Access the name property to return the name of the oldest customer
}; 

var youngestCustomer = function(array){
    return _.reduce(array, function(prev, current){
        // Check if the current age is less than the previous customer's age
        if(current.age < prev.age){ // If so, assign prev age to current age
            prev = current;
        }   // Return the youngest age
            return prev;
    }).name; // Access the name property to return the name of the youngest customer
};

var averageBalance = function(array){
    // Create a new array to hold all balances     
    let totalBalances = [];
    let ppl = array.length; // Find # of ppl to calculate average 
    let sum; // Declare a sum variable
    
    // For each customer, convert their balance to a number datatype
    _.each(array, function(customer){
        
        totalBalances.push(Number(customer.balance.replace(/[$,]/g, "")));
        // console.log(totalBalances);
    });
    // Use reduce function to add all the balances together in new array    
    sum = _.reduce(totalBalances, function(prevCusty, currCusty){
       
       return prevCusty += currCusty;
       
   });
   
   // Find average by dividing the sum of balances with total number of customers
   return sum / ppl;

};

// Create an array literal
// Use for each to extract first letter of customer names
// Push letters into array if they match target
    // Return the length of array

var firstLetterCount = function(customers, target){
    // Create an array literal
    let letters = [];
    // Use for each to extract first letter of customer names
    _.each(customers, function(customer){
        // Push letters into array if they match target, make lowercase
        customer.name[0].toLowerCase() === target.toLowerCase() ? 
        letters.push(customer.name) : null;
        // console.log(letters);
    });
    // Return the length of array
    return letters.length;
};


// My plannnn of action!

// Create an array literal
// Use for each to extract first letter of given customer's friends
// Push letters into array if they match target, make lowercase
// Return the length of the array

var friendFirstLetterCount = function(customers, customer, target){
    // Create an array literal
    let friendsLetters = [];
    // Declare a variable representing the friends array within the customer object
    let friends;
    // Declare a variable to hold plucked friends
    let pals;
    
    // Use for each to access the friends array within customer object
    _.each(customers, function(custy){
        friends = custy.friends;
        // console.log(friends);
        
        // Pluck the friends' names 
        pals = _.pluck(friends, "name"); 
        // console.log(pals);
        // console.log(custy.name, custy.name === customer);
        
        // Check if the current customer is the input customer
        if(custy.name === customer){ // Push friends letters into new array, accounting for all cases
            _.each(pals, function(friend){
                friend[0].toLowerCase() === target.toLowerCase() ?
                friendsLetters.push(friend) : null;
                // console.log("fs with ls", friendsLetters);
                });
        }
    }); // console.log(friendsLetters.length);
    // Return the number of friends in new array
    return friendsLetters.length;
};





// My plannnnnn

// Create a new array literal
// Pluck the friends list again
    // Check if customer name is included in list
    // If so, push name in array
// Return the array of names


var friendsCount = function(customers, name){
    
    // Declare a variable to represent the friends array 
    let mutuals;
    // Declare a variable to be used for plucked friends
    let list;
    // Create a new array literal to hold final list of names
    let names = [];
    
    // Use each function to access each customer object
    _.each(customers, function(person){
        // Access the friends array in each customer object
        mutuals = person.friends;
        
        // Pluck the names of all the customer's friends
       list = _.pluck(mutuals, "name");
    //   console.log(list);
        
        // Check if customer name is included in list
            // If so, push name into new array
        list.includes(name) ? names.push(person.name) : null;
    });
    // Return the array of names
    return names;
};


// My plannnn

// Use pluck to get all tags
// Reduce the tags to one array
    // Sort the tags to see duplicates
// Count the tags using reduce and tallying the instances of tags
// Loop thru new totals object to retrieve the top three tags
// Return top tags in an array
var topThreeTags = function(customers){
    
   // Create a variable to hold the count of each tag
   let countArr = [];
   // Create a variable to return the top 3 tag strings
   let top3Tags = [];
   
   // Pluck the tags from customers array
   let tags = _.pluck(customers, "tags");
    // console.log(tags);
   
   // Flatten the tags array and sort duplicates together
   let allTags = _.reduce(tags, function(prevTag, currTag){
        return prevTag.concat(currTag);
    }).sort();
    
    // console.log(allTags);
    
    // Use reduce to order the count into an object
    let totals = allTags.reduce(function(count, tag){

        count[tag] ? count[tag] = count[tag] + 1 : count[tag] = 1;
        // console.log(count);
        return count;
  }, {});
  
    // console.log(totals);
    
    // Loop thru object, pushing the properties into an array
    for(let key in totals){
        countArr.push([key, totals[key]]);
    }
    
    // Sort tags in descending order based on their count
    let top = countArr.sort(function(prevTag, currTag){
        return currTag[1] - prevTag[1];
    }).slice(0, 3);
    
    // console.log(top);
    
    // // Filter thru the top array and push tag strings into new array
     _.filter(top, function(topTag){
        return topTag[0] ? top3Tags.push(topTag[0]) : null;
    });
    
    // Return the final array with the strings of the top three tags
    return top3Tags;
};



var genderCount = function(customers){
    
    // Reduce array into object with gender count
  return  _.reduce(customers, function(accGender, currGender, i){
        
        // Check if the element in array contains a gender property
            // If so, update object incrementally for every instance of given gender
        customers[i]["gender"] ? accGender[customers[i]["gender"]] = 
        accGender[customers[i]["gender"]] += 1 : accGender[customers[i]["gender"]] = 1;
        
        // console.log(accGender);
        
        // Return the final count
        return accGender;
    
    // Use base count object as seed    
    }, {"male": 0, "female": 0, "non-binary": 0});
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
