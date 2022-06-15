/*You are given a number "n" (n >= 0) and a digit "d" (0 <= d <= 9).

Write a function nbDig(n, d) that finds the square of each integer from 0 to n, and returns the number of times that the digit d appears across all the squares. Note that d might appear multiple times in a single square.

Example:

n=12, d=1
Squares from 0 to n=12: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
The function returns 7 because the digit d=1 appears 7 times: in 1, 16, 81, 100, 121 (note: 1 appears twice in 121), and 144.

n=10, d=0
Squares from 0 to n=10: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
The function returns 3 because the digit d=0 appears 3 times: in 0 and 100 (note: 0 appears twice in 100).*/

function nbDig(n, d) {
    let totalOfDigit = 0;
  
    for(let i = 0; i <= n; i++) {
      totalOfDigit += (i*i).toString().split('').filter(n => n == d).length;
    }
      
    return totalOfDigit;
}