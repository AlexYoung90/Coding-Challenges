// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a , b )
{
    if( a === b){// if the numbers are the same returns only the second number
        return b
    }
    else if (a > b){// if a is greater then b this reverses the order so counting can be done 
        let sum = 0
        for(let i= Number(b);i <= a ; i++){
            sum += i
        }
        return sum
    }
    else{// if a is less then b then the order stays the same for counting 
        let sum = 0
        for(let i= Number(a);i <= b ; i++){
            sum += i
        }
        return sum
    }
}
// tests
console.log(getSum(1,2))
console.log(getSum(1,1))
console.log(getSum(3,1))
console.log(getSum(-1,12))