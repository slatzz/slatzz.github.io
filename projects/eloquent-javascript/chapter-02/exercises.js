
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  
  // Create a variable assigned as an empty string
  let hash = "";
  
  // Create a loop and add a new "#" every iteration
  for(let i = 1; i <= number; i++){
    
    console.log(hash += "#");
  }
  // Return the triangle
  return hash;
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
  for(let i = 1; i <= 15; i++){
    // Print "fizzbuzz" if number is a multiple of both 3 and 5
   if(i%3 === 0 && i%5 === 0){
    console.log("fizzbuzz");
    
  } else if(i%3 === 0){ // Print "fizz" if i is a multiple of 3
    console.log("fizz");
    
  } else if(i%5 === 0){ // Print "buzz" if i is a multiple of 5
    console.log("buzz");
    
  } else { // Otherwise, print the number
    console.log(i);  
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  
  // Create a variable for the chessboard assigned to an empty string
  let board = "";
  // Create a variable representing the number of hashtags to add to board
  let height = number;
  
  // Create a for loop with a nested for loop to represent the
    // width and height of the board
  for(let i = 0; i < height; i++){
    
    for(let j = 0; j < height; j++){
      // Check if line is odd or even using modulo operator %
      if((i+j) % 2 == 0){
        
          board += " ";
          
      } else {
        
        board += "#";
        }
      } // Add new lines after each iteration
        board += "\n";
    }
    // Return the final board
    console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
