/* Check to see if all the 'letters' can be used to create the 'word'

returns a boolean
"bcd", ["a", "b", "c", "d"] -> true

Cannot reuse letters
"aa", ["a", "b", "c", "d"] -> false

"wordd"
{w,w,o,r,d=0}

w2, o1
*/


function canConstructWord(word, letters) {
    //if letters is shorter than word then fail fast
    if (letters.length < word.length) return false;

    //create freq counter for letters
    const countOfLetters = createFreqCounter(letters);

    //loop through word
    for (let char of word) { //O(n)
        //check to see if the char exists in the freq counter

        if (countOfLetters[char] > 0) {
            // if yes and the value is greater than 0, -1 in freq counter.
            countOfLetters[char]--;
        } else {
            // if no, return false
            return false;
        }
    }

    return true;
}

/* Accepts an array or string and returns a freq counter object

["a", "a", "c", "d"] -> {a: 2, c: 1, d: 1}
*/
function createFreqCounter(letters) { //O(n)
    //create an empty object for freq counter
    const freqCounter = {};

    // loop through letters
    for (const char of letters) {
        // check if the char exists inside the counter
        let currCount = freqCounter[char] || 0; //0

        freqCounter[char] = ++currCount; //pre-add the number then set it in the object
    }

    return freqCounter;
}

export { canConstructWord };
