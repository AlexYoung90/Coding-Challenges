/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/ 

///// prams /// 
// take in a string of nums where a "good" string will only include letters up to "m" a "bad" will include letters greater then "m"

/////// return /////// 
// return should be a the number of errors and the number of letters in the string sperated by a "/"
// return should look like "5/15"

/////// examples //////
/*s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/



function printerError(s) {
    let errors = 0// setting up a varible for our erros 
    for(let i = 0 ; i < s.length; i++){/// loop through the string 
        if (s[i] > "m"){/// any letters greater then "m" will add +1 to "errors"
            errors++
        } 
    }
    return errors+"/"+s.length // will return "value of errors / length of the string"
}
//////// test //////////
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
/// expected return "8/22"