const { twoSum } = require('./main.js');

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function test() {
    console.log("Running tests...\n");

    const tests = [
        [[1, 2, 3, 4, 5], 9],
        [[10, 20, 30, 40], 70],
        [[7, 1, 9, 3, 5], 16],
        [[100, 50, 75, 25], 175],
        [[5, 3], 8],
        [[10, 10], 20],
        [[5, 5, 5, 5], 10],
        [[1, 3, 3, 2], 6],
        [[10, 8, 10, 6], 20],
        [[-1, -5, -2, -8], -3],
        [[5, -1, 3, -10], 8],
        [[-1, -2], -3],
        [[0, -5, 10, -2], 10],
        [[-10, 15, -5, 20], 35],
        [[1, 8, 3, 6, 2, 9, 4, 7, 5], 17],
        [[100, 1, 99, 2, 98, 3], 199],
        [[0, 0], 0],
        [[1000, 500, 750, 250, 999], 1999],
        [[2, 1], 3]
    ]

    let passed = 0;

    for (let i = 0; i < tests.length; i++) {
        const [input, expected] = tests[i];
        const result = twoSum(input);

        if (result === expected) {
            console.log(`✅ Test ${i + 1}: PASS`);
            passed++;
        } else {
            console.log(`❌ Test ${i + 1}: FAIL`);
            console.log(`   Input: [${input.join(', ')}]`);
            console.log(`   Expected: ${expected}, Got: ${result}\n`);
        }
    }

    console.log(`\n${passed}/${tests.length} tests passed`);
}

test();