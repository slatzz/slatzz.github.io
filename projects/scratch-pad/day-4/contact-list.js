// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    // Create an object literal with the given parameters as the key/value pairs
    return {id: id, 
    nameFirst: nameFirst, 
    nameLast: nameLast
        
    };

} 


function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // Assign the contacts variable to an array literal 
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            // Access the length property of contacts
            return contacts.length;
        },
        
        addContact: function(contact) {
            // Push the contacts into the new contacts array
            return contacts.push(contact);
        },
        
        findContact: function(fullName){
            // Loop over the contacts array to check if the fullName matches the contacts
            for(let i = 0; i < contacts.length; i++){
                
                if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                    // Return the name if there is a match
                    return contacts[i];
                }
            }
        },
        
        removeContact: function(contact){
            // Loop over the contacts array 
            for(let i = 0; i < contacts.length; i++){
                
                if(contact === contacts[i]){
                    // Use the splice method to remove the name from the list
                    return contacts.splice(i, 1);
                }
            }
            
        },
        
        printAllContactNames: function() {
            
            // Create a new array to hold the new list of all contacts
            let allContacts = [];
            
            // Loop through the contacts list to push all names into new array
            for(let i = 0; i < contacts.length; i++){
                
                allContacts.push(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]);
            }
            // Use \n to create a new line between printed contacts
            return allContacts.join("\n");
        }
     
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
