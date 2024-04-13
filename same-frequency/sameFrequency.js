
/* Checks if num1 and num2 consists of the same chars, regardless of the order

Returns a boolean

Examples:
sameFrequency(123, 321);   // true
sameFrequency(34, 14);     // false
sameFrequency(22, 22);     // true
sameFrequency(22, 222);    // false
*/

function sameFrequency(num1, num2) {

    const string1 = `${num1}`;
    const string2 = `${num2}`;

    if (string1.length !== string2.length) return false;

    //create freq counter for from strings
    const countOfChars1 = createFreqCounter(string1);
    const countOfChars2 = createFreqCounter(string2);

    //loop through the first freqcounter and compare to the second
    for (let char in countOfChars1) { //O(n)
        //check to see if the char exists in the freq counter

        if (countOfChars1[char] !== countOfChars2[char]) return false;
    }

    return true;
}

/* Accepts an array or string and returns a freq counter object

["1", "2", "3", "2"] ->{"1": 1, "2": 2, "3": 1}

["a", "a", "c", "d"] -> {a: 2, c: 1, d: 1}
*/
function createFreqCounter(chars) { //O(n)
    //create an empty object for freq counter
    const freqCounter = {};

    // loop through letters
    for (const char of chars) {
        // check if the char exists inside the counter
        let currCount = freqCounter[char] || 0; //0

        freqCounter[char] = ++currCount; //pre-add the number then set it in the object
    }

    return freqCounter;
}

export { sameFrequency };
