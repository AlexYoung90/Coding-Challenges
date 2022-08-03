/**Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n" */


// prams // 
// taking in 1 number

// return // 
// if number is negitive, even or 0 return null 
// otherwise return a string like exampled above
/**
 A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:
*/
//  "*\n ***\n*****\n ***\n  *\n" */"

// create a function to take in our number param
function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null // if n is 0 or even return will be null 
    str = '' // create a variable for our new string 
    // create a for loop to add repeat elements to our 'str' variable
    for (let i = 0; i < n; i++) {
      let length = Math.abs((n-2*i-1)/2) // Math.abs returns an absolute value of a number and this sets our length of add for the below elements.
      str += ' '.repeat(length)
      str += '*'.repeat(n-2*length)
      str += '\n'
    }
    return str // returns our string variable 
  }

// tests // 
console.log(diamond(5))