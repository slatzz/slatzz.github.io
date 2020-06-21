// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
  // Base cases
  if(n === 0){ // Return 1 when number is 0
    return 1;
  }
  
  if(n < 0){ // Return null for negative numbers
    return null;
  }
  
  // Recursive case
    // Multiply the current number by the number below it
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  
  // Base case
  if(array.length === 0){ // Return zero for empty arrays
    return 0;
  } else if(array.length === 1){ // Return the only element in array when there is one element
    return array[0];
  }
  
  // Recursive case
    // Add the elements and slice them off as the function iterates
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
// XXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXX
};

// 4. Check if a number is even.
var isEven = function(n) {
  
  // Base case - when to stop
    if(n === 0){ // Stop recursing when n is 0 and return true
      return true;
    } else if(n === 1){ // Stop when n is 1 and return false
      return false;
      
  // Recursive case
    // Call the function within itself
    } else if(n < 0){ // If n is negative, call function on -n to make it positive
      return isEven(-n);
    }
    // In other cases, run the function
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n){
  // Base case
  // Check if number is 0 or 1 and return 0 if so
  if(n === 0 || n === 1){
    return 0;
  }
  // Check if n is negative
  if(n < 0){

    return n + 1 + sumBelow(n + 1);
  }
  // Otherwise, recursive case
  return n - 1 + sumBelow(n - 1);

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(start, end) {
  
  // Create an array to hold range
  let array = [];
  
  // Return array if the start minus 1 equals the final number
    // or if the start plus 1 equals end
  if(start - 1 === end || start + 1 === end || start === end){
    return array;
    
  } else if(start < end){
    // Return start + 1 
    return array.concat(start + 1, range(start + 1, end));
    
  } else if(start > end){
    
    return array.concat(start - 1, range(start - 1, end));
  }
  
  // [start + 1].concat(range(start + 1, end));
  // [start - 1].concat(range(start - 1, end));
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base case
  if(exp === 0){ // Return 1 when exponent is 0
    return 1;
  } else if(exp < 0){ // Return 1 / exponent() for negative integers
    return 1 / exponent(base, -exp); // Negate the exponent for neg intes
  } 
  // Recursive case
    // Otherwise, multiply base by exponent ()
  return base * exponent(base, exp - 1);
  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  
  // Base case
  if(n === 1){ // Return true when n is 1
    return true;
  } else if(n < 1){ // Return false if n is negative
    return false;
  } // Recursive case
  // Check if n is a power of 2
  return powerOfTwo(n / 2); 
  
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // Base case
    // Return string if string is empty
  if(string.length === 0){
    return string;
  }
  // Recursive case
    // Concat beginning of string onto the end
  return reverse(string.substring(1)).concat(string[0]);
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Adjust string to account for cases and spaces
  let str = string.toLowerCase().replace(" ", "");
  
  // Base case
    // Return true if the string is empty
  if(!str.length){
    return true;
  }
    // Return false if the first and last letters do not match
  if(str[0] !== str[str.length - 1]){
    return false;
  }
  
  // Recursive case
    // Iterate thru string and check if opposite letters match, slicing
      // them off after the check
    return palindrome(str.slice(1, str.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  // XXXXXXXXXXXXXXXXXXXXXXX
  // XXXXXXXXXXXXXXXXXXXXXXX
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// PSEUDOCODE BELOW FUNCTION
var multiply = function(x, y) {
  
  if(x === 0 || y === 0){ 
    return 0;
  }
  
  if(x < 0){ 
    return -multiply(-x, y);
  } else if(y < 0){
    return -multiply(x, -y);
  }

  return x + multiply(x, y - 1);
  
 };
 
 // MULTIPLY PSEUDOCODE
//     var multiply = function(x, y) {
//    Base case

//   if(x === 0 || y === 0){ // Return 0 if either number is 0
//     return 0;
//   }
  
//   // Recursive case

//   if(x < 0){ // Account for negative integers
//     return -multiply(-x, y);
//   } else if(y < 0){
//     return -multiply(x, -y);
//   }

//   // Otherwise, multiply
//   return x + multiply(x, y - 1);
  
// };

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  
  // Base case
    // Stop when the strings are empty
        // Return true
    if(str1.length === 0 && str2.length === 0){
      return true;
    }
    // Recursive case
    // Check if the first letters do not match, return false
      // Otherwise, check letters and slice off letters as they are compared
    return str1[0] !== str2[0] ? false : compareStr(str1.slice(1), str2.slice(1)); // Recursive case

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  
  // Base case
    // Return array when string is empty
  if(str.length === 0){
    return [];
  }
  
  // Recursive case
    // Add first letter of string to array and slice it off after 
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  
  // Base Case
    // Stop recursing when the array is empty
   if(array.length === 0){
    return [];
  }
  // Recursive case
    // Slice off elements from back of array and add them to front of array 
  return reverseArr(array.slice(1)).concat(array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
  // Create an array to hold values
  let array = [];
  
  // If the length of the array matches the target length, return the array
  if(array.length === length){
    return array;
  } 
  
  // Recursive case
    // Otherwise, add the values to the array
    return [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = {}) {
  
  // Base case
    // Return number of occurrences when array is empty
    if(!array.length){
      // Extract the values in object
        // Join them into a string
          // Convert to number
      return Number(Object.values(count).join(""));
    }
    // Check if first element in array is the target value
    if(array[0] === value && count[array[0]]){
      count[array[0]] += 1; // Add count if prop exists
    } else if(array[0] === value && !count[array[0]]){ // Check first element is value
      count[array[0]] = 1; // Begin count if prop does not already exist
    }
  
    // Recursive case
      // Otherwise, count occurrences of value in array and add to new object
      // I know I took the long way to figure this one out but I was determined to achieve the solution thru this route lol 
    return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  // Base case
    // Return new array when input array is empty
    if(!array.length){
      return [];
    }
    
    // Recursive case
      // Invoke callback function over every element in array and place into new array
        // Slice off each element as the function is passed over it
          // Return new array with mapped elements
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  
  // Return 0 of the number is 0
  if (n === 0){ 
    return 0;
  } else if(n < 0){ // Return null for negative integers
    return null;
  } else if(n === 1){ // Return 1 if number is 1
    return 1;
  } // Otherwise, run the function over the number
  return nthFibo(n-1) + nthFibo(n-2); 

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(wordsArr) {
  
  // Base case
    // Return array when input array is empty
  if(!wordsArr.length){
    return [];
  }
    // Otherwise, capitalize first element in array and slice it off until array is empty
    return [wordsArr[0].toUpperCase()].concat(capitalizeWords(wordsArr.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
  if(!array.length){
    return [];
  }
  
  return [array[0][0].toUpperCase() + array[0].substring(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  
  // Base case
    // Return the object when the string is empty
    if(!str.length){
      return obj;
    } else if(obj[str[0]]){
      obj[str[0]] += 1; // Add a tally if the object has an existing property
    } else {
      obj[str[0]] = 1; // If no property exists yet, create prop and begin the tally
    }
    
    // Recursive case
      // Iterate through string, tallying the letters
      return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, noDups = []) {
    
    // Base case
      // Return new array when list is empty
    if(!list.length) {
      return noDups;
    } 
    
    // Recursive case:
    if(list[0] !== list[1]) { // If the first two elements are not duplicates, push first element into new array
      noDups = [list[0]];
    } 
    
    // Slice off first element and add to new array if it does not match its neighboring element
    return noDups.concat(compress(list.slice(1)));
  
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, lessZeroes = []) {
  
  // Base case
   if(!array.length) { // Return new array when original array is empty
      return lessZeroes;
    } 
    
    // Recursive case:
    if(array[0] !== array[1]) { // Check for consecutive 0s  
      lessZeroes = [array[0]]; // If the first two elements do not match, add first element to new array
    } 
    
    // Slice off first element and add to new array if it is unique
    return lessZeroes.concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
    // Base case
      // Return an empty array when there are no more elements
   if(!array.length) {
      return [];
    } 
    
    // Recursive case:
      // Check if first element in array is positive or negative
    if(array[0] < 0) { // Convert the number accordingly
      array[0] = -array[0];
    } 
    // Check the second element in array
    if(array[1] > 0) { // Convert number accordingly
      array[1] = -array[1];
    }
    // Slice off the first two elements as you convert to alternative signs
    return[array[0], array[1]].concat(alternateSign(array.slice(2)));
  
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
  // Base case
    // Return new string when the string is empty
  if(!str.length){
    return "";
  }
  
  // Recursive case
  
  if(str[0] === "0"){ // Check string number
    // Replace the instance of string number with number spelled out
    return "zero" + numToText(str.slice(1));
  } else if(str[0] === "1"){
    return "one" + numToText(str.slice(1));
  } else if(str[0] === "2"){
    return "two" + numToText(str.slice(1));
  } else if(str[0] === "3"){
    return "three" + numToText(str.slice(1));
  } else if(str[0] === "4"){
    return "four" + numToText(str.slice(1));
  } else if(str[0] === "5"){
    return "five" + numToText(str.slice(1));
  } else if(str[0] === "6"){
    return "six" + numToText(str.slice(1));
  } else if(str[0] === "7"){
    return "seven" + numToText(str.slice(1));
  } else if(str[0] === "8"){
    return "eight" + numToText(str.slice(1));
  } else if(str[0] === "nine"){
    return "nine" + numToText(str.slice(1));
  } 
  
  // Return the updated sentence
   return str[0].concat(numToText(str.slice(1)));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
   /**
   * XXXXXXXXXXXXXXXXXX
   * XXXXXXXXXXXXXXXXXX
   */ 
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
