/**
Given a sorted array of numbers and targetAvg,
return a boolean if a pair of nums averages out to be equal to our targetAvg //FIXME: use nums in both places (top and bottom sentence)

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
    if (nums.length === 0) return false; //O(1)

    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
        let pairAvg = (nums[leftPointer] + nums[rightPointer]) / 2;

        if (pairAvg === targetAvg) return true;

        if (pairAvg > targetAvg) {
            rightPointer--;
        }
        else {
            leftPointer++;
        }
    }

    return false;


}

export { averagePair };
