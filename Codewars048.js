/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]*/
// params
// we will be given a number
// numbers will always be whole
// numbers will always be passed in as number, not a string
// numbers will not start in an array

// return
// the return should be the passed in number reversed and in an array

// example 
// reverseNums(49857) would have an expected return of [7,5,8,9,4]

// create a function we can pass in our number to
function reverseNums(n) {
    return n.toString() // starting the return. to string will take our number and convert it to a string so we can split it
      .split('')// splits the number string into an array of numbers 
      .reverse()// reverses the array in place 
      .map( n => Number(n))// returns a new array where every element has been changed to its number value 
  }


// test
console.log(reverseNums(49857))//expected return of [7,5,8,9,4]