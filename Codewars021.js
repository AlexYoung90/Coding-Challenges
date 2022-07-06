/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

// first we will set up a function that will take in two decimal numbers we will call "a" and "b
function addBinary(a,b) {
// we then need to create a variable to hold the sum of our two numbers 
    let sum = a + b

    /* JavaScript numbers have a toString() method that takes a radix parameter

(A radix parameter specifies the number system to use: 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal. If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.).

Calling x.toString(2) tells JavaScript to convert x to a string containing the binary representation of 42. */
    return sum.toString(2)
  }

/* above code could have been written in one line as such

const addBinary = (a, b) => (a + b).toString(2);
*/