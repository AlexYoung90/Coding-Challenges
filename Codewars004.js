/*Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade (n1, n2, n3) {
    const average = (n1 + n2 + n3) / 3
    console.log(average)
    if (average < 60){
        return 'F'
    }else if(average >= 60 && average < 70){
        return "D"
    }else if(average >= 70 && average < 80){
        return "C"
    }else if(average >= 80 && average < 90){
        return "B"
    }else if(average >= 90){
        return "A"
    }
  }
console.log(getGrade(99,99,99))// return A
console.log(getGrade(90,90,90))// return B
console.log(getGrade(73,73,73))// return C
console.log(getGrade(65,65,65))// ruturn D
console.log(getGrade(30,50,60))// return F



