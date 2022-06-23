// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z

function accum(s){
    return s
      .split('')/// splits the string into an array of each letter
      .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))// makes a new array with the first letter caped and then repeats the letter in lower case by its position in the array
      .join('-')// rejoins the new array from .map into a string seperated by a "-"
  }

////// TEST ////////
console.log(accum(abbcccddddeeeeeefffffffgggggggg))