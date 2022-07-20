/**Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */

//// prams ///
/* we will be taking in an array of numbers 
    first number in the array will be the lowest and the last number in the array will be the highest
    numbers can be negitive
    the array can include both pos and neg numbers between the first element and the last
    */

//// return //// 
/* we want to return a new array with all numbers between the first number in the array and the last number*/

/// example /// 
/* fixPipe([1,2,4,6,9]) should return [1,2,3,4,5,6,7,8,9] */

// first set up a function that will take in our number array

function pipeFix(numbers){
    
    //create a variable to hold the value of our first number in the array 
    
    const firstNum = numbers[0]
   
    //create a variable for our last number in the array 
   
    const lastNum = numbers[numbers.length-1]
   
    //create a variable that we can .push values to
   
    let fixedNums = []
   
    /* setting up a for loop that will check our firstNum value against our lastNum value*/
   
    for(let i= firstNum; i <= lastNum; i++){
        // if firstNum is less than or equal to lastNum we will push the value of i to our new array of fixedNums 
        fixedNums.push(i)
    }
    // once our for loop has finshed we want to push our new array of FixedNums
    return fixedNums
    }


/// tests /// 
console.log(pipeFix([1,9]))
console.log(pipeFix([-4,230]))
console.log(pipeFix([1,-4,3,-23000,18, 8]))