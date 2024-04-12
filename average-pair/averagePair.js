/*
Given a sorted array of numbers and targetAvg,
return a boolean if a pair of nums averages out to be equal to our targetAvg

should be O(n)
Formula:
a + b / 2 = avg

Examples:
averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false
*/

function averagePair(nums, targetAvg) {
    //if nums is empty return false

    // left pointer [0]
    // right pointer [1]
    //While the left is less than or equal to the (array length - 2), loop.

    // Check if right > nums.length - 1, if yes, then increment left by 1 and
    // set right to (left + 1)

    //Get left val and right val then calculate average
    //check if it matches the targetAvg, if yes, return true!
    // Else increment the right by one

    return false;
}

export { averagePair };
