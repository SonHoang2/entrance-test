function twoSum(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least 2 elements");
    }
    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }
    
    return largest + secondLargest;
}

module.exports = { twoSum };