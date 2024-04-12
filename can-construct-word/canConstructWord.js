/* Check to see if all the 'letters' can be used to create the 'word'

returns a boolean
"bcd", ["a", "b", "c", "d"] -> true

Cannot reuse letters
"aa", ["a", "b", "c", "d"] -> false
*/


function canConstructWord(word, letters) {
    //if letters is shorter than word then fail fast
    if (letters.length < word.length) return false;

    //create freq counter for letters


    //loop through word
    //check to see if the char exists in the freq counter
    // if yes and the value is greater than 0, -1 in freq counter.
    // if no, return false


    return true;
}

/* Accepts an array or string and returns a freq counter object

["a", "a", "c", "d"] -> {a: 2, c: 1, d: 1}
*/
function createFreqCounter(letters){
    //create an empty object for freq counter

    // loop through letters
    // check if the char exists inside the counter
    // if yes, increment be one,
    // if not, set it to 0

    // return freq counter obj
}

export { canConstructWord };
