//Write a function called RemoveExclamationMarks which removes all exclamation marks from a given string.
// params we will be given a string with exlamation marks to remove 
// return the given string as is without exclamation marks
// expected "this is a string!! These are some words!." --- "this is a string These are some words."

function removeExclamationMarks(string){// function to pass our string with exlamations in 
    return string.split('!').join('');/* splits the string into an array and removes every ! at each !. then rejoins the array into a string*/
}

/////////////////////////////
///////  tests   ////////////
/////////////////////////////

console.log(removeExclamationMarks('This is a String!! Everyone loves strings!'))
