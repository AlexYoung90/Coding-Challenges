/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't*/

// prams 
// the function will need to take in two numbers.  
// they will always be positive whole numbers.

// return 
// the function should return true when one of the numbers is even and the other number is odd.
// if both numbers are even or odd the return should be false.

// example
// loveFunc(1,4) would return true since 1 is odd and 4 is even
// loveFunc(2,8) would return false since both numbers are even

// create a function that will take in our numbers 
function loveFunc(flower1, flower2){
    // evenOrOdd will check if the number passed in is odd or even and return true for even and flase for odd
    const evenOrOdd = (n) => n % 2 === 0 ? true:false
    // if statement to check the two returns passed to evenOrOdd
    if(evenOrOdd(flower1) === true && evenOrOdd(flower2) === false ){
      return true // if one number is even and one is odd the return will be true
    }
    else if (evenOrOdd(flower1) === false && evenOrOdd(flower2) === true ){
      return true // if one number is odd and one is even the return will be true
    }
    else{
      return false // anything else will return false
    }
  }

// test

console.log(loveFunc(1,4))// expected return true
console.log(loveFunc(2,6))// expected return false 