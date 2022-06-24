// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

//////////////////
///Params/////////
//////////////////

// were going to have to take in to paramaters, the players current location, and the roll
/// location and roll will allways be positive. 
// location will be 0 - 100, roll will be 1- 6


////////////////
/////return/////
////////////////

// we want to return the players new current location 
//  taking the current location and adding the value of the roll times 2

////////////////
////examples////
////////////////

// move(3,6) would expect 15 as the new location value 3 + (6 * 2)


//create a function called move with params of currentLocation and roll 
function move( currentLocation, roll ){
//add the value of currentLocation to the product of the value of roll times two
return currentLocation += roll * 2
}

////////////////
////tests///////
////////////////

console.log(move(3,6))//expected 15