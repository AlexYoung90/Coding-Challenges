/** Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it. */

/// prams ///
// we will be taking in a number "n". n will always be a positive whole number 
// n should be checked against 3 different values 
// n less then 5 = cost is 100
// n >= 5 and <10 = cost is 95
// n >=10  = cost is 90

/// return ///
// we want to return the value of n * the cost after finding what cost value to used base on the value of n

/// example ///
// n = 4 should return 400, 4 * 100
// n = 6 should return 570, 6 * 95
// n = 10 should return 900, 10 * 90

// we need to set up a function called saleHotdogs that will take in a param of a number
function saleHotdogs(n){
//check n against condtions above with if else if statements
if (n < 5){ // if n is less then 5 the cost value should be 100
    return n * 100// returns the value of n x the cost of 100
}/// use a else if statement to check our 2nd condition
else if (n >= 5 && n < 10 ){// if n is + 5 or greater and less then 10 the cost is 95
    return n * 95// returns n x the cost of 95
}
// if the above conditions arent met that means n is greater the 10 and will default to the below statement
else{
    return n * 90
}
}
/// refactor /// 

/* the above code without comments:

function saleHotdogs(n){
if (n < 5){
    return n * 100
}else if (n >= 5 && n < 10 ){
    return n * 95
}else{
    return n * 90
}}

could be written with a ternary function exampled below

function saleHotdogs(n){
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
*/


/// tests ///

console.log(saleHotdogs(1))// expected 100
console.log(saleHotdogs(4))// expected 400
console.log(saleHotdogs(9))// expected 855
console.log(saleHotdogs(10))// expected 900
