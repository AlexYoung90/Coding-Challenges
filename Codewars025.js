/** DESCRIPTION:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
 */

// params //
// take in a whole number always between 1-9 and always a whole number 

// return the word eqiv of the number inputed 

// expected // 

// input of 1 = 'one'
// input of 2 = 'two' 
// so on...


// switch case statements /// 
/*switch (expression) {
    case value1:
      //Statements executed when the
      //result of expression matches value1
      [break;]
    case value2:
      //Statements executed when the
      //result of expression matches value2
      [break;]
    ...
*/
function switchItUp(number){
    switch(number){
        case 0:
            return "Zero"
        break;
        case 1:
            return "One"
        break;
        case 2: 
            return "Two"
        break;
        case 3:
            return "Three"
        break;
        case 4:
            return "Four"
        break;
        case 5: 
            return "Five"
        break;
        case 6:
            return "Six"
        break;
        case 7: 
            return "Seven"
        break;
        case 8:
            return "Eight"
        break;
        case 9:
            return "Nine"
        break;
        default:
            return "Not a number between 1-9"
    }
}