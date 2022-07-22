/** Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

/// prams /// 
/* we will be taking in two numbers a and b
a will equal our lowest number 
b will equal our higest number */

/// return // 
//we want to return an array containing the all the numbers including a through b

// examples  ///
//between(1,5) would return an array [1,2,3,4,5]

//create a function
function between(a, b) {
    //create a variable to hold the new array 
    let newArray = []
    //for loop to go through all numbers between a and b 
    for(let i = a; i <= b; i++){
    // push value of i to newArray until a is equal to b
      newArray.push(i)
    }
    //return our new array 
    return newArray
  }

// tests /// 
console.log(between(1,9))
console.log(between(-4,230))
console.log(between(12,80))