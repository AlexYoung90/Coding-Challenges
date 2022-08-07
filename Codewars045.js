/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

// prams 
// take in a array of numbers
// numbers will always be positive whole intergers 

// return 
// the return should be one number that is the sum of the two lowest numbers from the given array

// example 
// if the array passed in was [1,6,8,4,9] we would expect 5 for our return because 1 and 4 are the two lowest numbers and the sum is 5

// create a function that will take in an array of numbers  
function sumTwoSmallestNumbers(numArr) {
    // create a variable that will hold our sorted array  
    const lowToHigh = numArr.sort(
        // this function sorts the array from lowest to highest value 
        (a , b) => a - b)
    // then return the sum of the two lowest values from our sorted array
    return lowToHigh[0] + lowToHigh[1]
  }

// tests
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
// expected 3453455
console.log(sumTwoSmallestNumbers([1,6,8,4,9])) // expected 5