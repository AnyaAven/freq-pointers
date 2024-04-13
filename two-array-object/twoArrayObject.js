/**
create an object where the keys are the first array and values
from second array

if the values array is less than keys array, set the key's value to null

if the keys array is less than values array, stop at the end of keys array

Examples:
twoArrayObject(['x', 'y', 'z'], [1, 2]);
  // {'x': 1, 'y': 2, 'z': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
  // {'a': 1, 'b': 2, 'c': 3}
*/

function twoArrayObject(keys, vals) {
    if (keys.length === 0) {
        return { "": null };
    }

    const keyValObj = {};

    for (let i = 0; i < keys.length; i++) {

        keyValObj[keys[i]] = vals[i] || null;

    }

    return keyValObj;
}

export { twoArrayObject };
