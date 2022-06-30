/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

//prams///
// we will recive a neg or pos interger \
//return///
// if the num is pos return the neg of the num, if already neg return num, 0 = 0 
// expectations 
// 5 returns : -5 
// -5 returns : -5
// 0 returns : 0
function makeNegative(num) {// take in our number we want to eval
    if( num > 0){/// check if num is greater then 0
      return Number("-" + num)// if it is return a number with its value after "-"
    } else {// if the num is already neg or zero return num
      return num
    }
  }