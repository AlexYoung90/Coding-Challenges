/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/

function getRealFloor(n) {// n = floor number 
    if( n <= 0) {// check if the floor is 0 or under 
        return n // returns the number value 
    }
    else if( n >= 1 && n <=12){// checks if the floors are above 0 and less then 13 
        return n - 1/// returns the floor number minus 1 floor 
    }
    else{// any floors not meeting above conditions ( equals 13 or above)
        return n - 2 // return floor number minus 2 floors 
    }
}

// ternary //

/** above could have been made shorter if written with a ternary such as below

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
} 

*/


// tests // 

console.log(getRealFloor(1))// expect 0
console.log(getRealFloor(-2))// expect -2 
console.log(getRealFloor(3))// expect 2
console.log(getRealFloor(24))// expect 22
