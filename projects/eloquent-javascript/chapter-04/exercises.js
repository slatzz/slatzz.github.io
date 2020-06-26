////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end) {
  
  // Create a new variable and assign it to an array
  let array4Range = [];
  // Create a new variable to be applied to a given step later
  let step;
  
  // Check if the start value is equal to the end value
  if(start === end){ // Return empty array if values are the same
    return array4Range;
  }
  
  // Otherwise, push the range of numbers into new array if no step is given
  if(arguments.length === 2){
    for(let i = start; i <= end; i++){
     array4Range.push(start++);
    } 
    
    // If step is given, apply step and push values into new array
      // Check if step value is a positive integer
  } else if(arguments.length === 3 && arguments[arguments.length - 1] > 0){
    // Assign step to step variable
    step = arguments[arguments.length - 1];
    // Apply step to loop
    for(let i = start; i <= end; i += step){
      array4Range.push(i);
    }
  } // Return the new array
  return array4Range;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  // Create a variable to hold the sum of the numbers in array
  let total;
  
  // Return 0 if array is empty 
    // Otherwise, reduce array and add numbers as function iterates over elements
  return !array.length ? 0 : array.reduce((prevNum, currNum) => {
    
    total = prevNum += currNum;
    // Return final total sum
    return total;
  });

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // Create a new array to hold reversed elements
  let backwards = [];
  // Loop thru array
  for(let i = array.length - 1; i >= 0; i--){
    
    // Push elements into new array as loop iterates backwards
    backwards.push(array[i]);
    
  }
    // Return new array
    return backwards;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // Use reverse function to reverse the array in place
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  
  // Create a new variable assigned to null
  let list = null;
  
  // Loop thru array backwards
  for(let i = array.length - 1; i >= 0; i--){
    
    list = { "value": array[i], "rest": list};
    
  }
  // Return the new list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  
  // Create a new array
  let array = [];
  
  // Assign list to the starting condition
    // Assign the rest object to the ending condition
  for(let node = list; list; list = list.rest) {
      // Push values into new array 
      array.push(list.value);
  }
    // Return final array with values
    return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  
  return { 
    // Return the new object with the value of the value prop as the given element
      // Assign the rest prop to the whole input list
    "value": element,
    "rest": list
  };
  
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  
  // Return undefined if given index is a negative integer
  if(index < 0){
    return undefined;
  // Return first value in list  
  } else if(index === 0){
    
    return list.value;
    
  } // Otherwise, recursively call the function to obtain 
    // values in nested objects within list
    return nth( list.rest, index - 1 );
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  
  //  Strictly compare values
  if(val1 === val2){
    return true;
  }
  // Check if values are null or not an object
   if(val1 == null || typeof val1 !== "object" ||
    val2 == null || typeof val2 !== "object"){
      return false;
    }
  // Compare two empty objects
    // Compare objects with the same values
  let obj1Arr = Object.keys(val1);
  let obj2Arr = Object.keys(val2);
  
  // Check if objects have equal number of properties
  if(obj1Arr.length !== obj2Arr.length){
    return false;
  } 
  
  
  // for(let i = 0; i < obj1Arr.length; i++){
    
  //   if (!obj2Arr.includes(obj1Arr[i])) {
  //     return false;
  // }
  
  // Loop thru keys strings in obj1Arr
  for(let keyStr of obj1Arr){
    // Check if the properties in val1 match props in val2
      // Run deepEqual function 
    if(!obj2Arr.includes(keyStr) || !deepEqual(val1[keyStr], val2[keyStr])){
      return false;
    }
  }
 // Otherwise, return true
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
