/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

// prams // 
/* we will be passing in one number into a function. numbers may be pos, neg, int, or floats. */

// return //
/* we want to return true or false if the number is even or uneven. floats with a non zero decimal part are uneven. */

// example // 
// testEven(4) would return true because it is even
// testEven(3) would return false because it is not even
// testEven(4.0) would return true because it is even
// testEven(4.5) would return false because its not even

// we can easily do this with a simple function that takes in one param of n
function testEven(n){
    return n % 2 === 0 
}
// this could also be written as a variable

// const testEven = n => n % 2 === 0 ? true : false
// or like 
// const testEven = n => !(n % 2)
 
// The "!" exclamation point is part of JavaScript's logical operators.
// It is called the "unary negation operator", or more simply "logical NOT".
// It tries to convert whatever follows it into a boolean value ( true / false ).

// tests //
testEven(4)//return true because it is even
testEven(3)//return false because it is not even
testEven(4.0)//return true because it is even
testEven(4.5)//return false because its not even