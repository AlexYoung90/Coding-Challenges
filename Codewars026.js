/*I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

function humanYearsCatYearsDogYears(humanYears) {
    //variables to return later
    let catYears = 0
    let dogYears = 0
    for( let i = 1; i <= humanYears; i++){
        if( i === 1){// if pet is at least 1 year old add 15 age
            catYears += 15
            dogYears += 15
        }
        else if( i === 2){// if at least 2 will add above and add 9 to age
            catYears += 9
            dogYears += 9
        }
        else{// for each year after 2 add respected years to the age of each pet 
            catYears += 4
            dogYears += 5
        }
    }
    return [humanYears,catYears,dogYears]// returning our age plus the pets age
  }

console.log(humanYearsCatYearsDogYears(5))
console.log(humanYearsCatYearsDogYears(10))