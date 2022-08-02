function feast(beast, dish) {
    const beastSplit = beast.split('')
    const dishSplit = dish.split('')
    if( beastSplit[0] === dishSplit[0] && beastSplit[beastSplit.length -1] === dishSplit[dishSplit.length -1]){
      return true
    } else{
      return false 
    }
    }
 console.log(feast("great herron", "garlic nann"))
 console.log(feast("great herron", "gabbagol"))