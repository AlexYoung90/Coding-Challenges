/**Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

 */

//prams//
// we will be taking in a whole number
// assume the number will be >= 0
// numbers will not be passed in as string values 

//expected///
// if we were to pass in 12345 as number we would expect a return of 54321 as a number 

// we want to return a number value from the orignal number where all intergers are in decending order
// should be returning a number value, no strings or arrays 

// creating a new function to take in our number param n
function descendingOrder(n){
    let numberArray = n.toString().split('')// converts the number value to a string and then splits into an array 
    let HighToLow = numberArray.sort((a, b) => b - a).join('')// sorts the above array into descending order and joins the array back into a string 
    return Number(HighToLow)// returns the Number value of the string we created with HighToLow 
}
//tests//
console.log(descendingOrder(12345))// expected 54321
console.log(descendingOrder(0))// expected 0
console.log(descendingOrder(93555686642)) //expected 98666555432