/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

// params
// we will need to take in two strings 

//return
// our return will either be true or false depening on if the 2nd string passed in matches the first string passed in.

// example 
// solution('abc','bc') would return true because string1 ends with string2 
// solution('abc','jumanji') returns false because string1 does not end with string 2

//creating a function solution that will take in our two strings names
function solution(str,endStr){
    // we can easily check if our 1st string ends with our 2nd string thanks to .endsWith(). we just need to return str.endsWith(endStr)
    return str.endsWith(endStr)
}

// tests 
console.log(solution('abc','bc')) // expected return of true 
console.log(solution('abc','jumanji'))