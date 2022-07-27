/**Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

 */
// prams //
// take in a four letter string consisting of 'G' 'C' 'A' 'T'

// return //
// return the input string with all 'T's replaced with 'U'

// example // 
// DNAtoRNA("GCAT") would have an expected return of "GCAU"

// create a new funtion we can call with our dna argument 
function DNAtoRNA(dna) {
    const RNA =  dna.split('')/*splits the string into an array*/.map(element => element === "T" ? "U":element)/*creates an new array where each element = to "T" is replaced with "u"*/
    .join('') /* rejoins the array into a string */
    return RNA
  }

// test //
console.log(DNAtoRNA("GCAT"))