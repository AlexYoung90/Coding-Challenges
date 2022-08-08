/*DESCRIPTION:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

// create a function that will take in an array 
function removeEveryOther(arr){
    // create a variable to hold elements of the array we want to keep
    let newArr=[]
    // set up a for loop to loop over the array counting by two
  for (let i = 0; i < arr.length; i+=2){
    // each loop push the current element to the new array
    newArr.push(arr[i])
    }
    //return the newArr variable
  return newArr
  }

  //tests 
  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"]))
  //expected ["Keep","Keep","Keep"]