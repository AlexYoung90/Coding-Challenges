/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
As usual, your function/method should be pure, i.e. it should not mutate the original string.*/

/*****prams***********/
// we will be taking a string of characters. the string won't be empty. may include numbers
/*****return***********/
//return the orginal string whith all lowercase letters changed to uppercase and vice versa
/***examples*********/
//"This Is A String." expected return "tHIS iS a sTRING." 
//"UPPER lower." expected to return "upper LOWER."

// define a String.prototype function that we can use on the strings we want to change cases on.
String.prototype.toAlternatingCase = function () {
    //returns the string the method is called on. .split turns the string into an array
    // .map returns a new array that for each char checks if it is upper or lowercase and returns the opposite case.
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

/*******tests******/
console.log("This Is A String".toAlternatingCase())
console.log("UPPER lower".toAlternatingCase())
console.log("aaaBBBBB123CCccCCccCC".toAlternatingCase())