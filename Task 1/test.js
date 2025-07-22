const { mostFrequentStringLengths } = require('./main.js');

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
        [['a', 'ab', 'abc', 'cd', 'def', 'gh'], ['ab', 'cd', 'gh']],
        [[], []],
        [['hello'], ['hello']],
        [['cat', 'dog', 'rat', 'bat'], ['cat', 'dog', 'rat', 'bat']],
        [['a', 'b', 'c', 'd', 'ab', 'abc'], ['a', 'b', 'c', 'd']],
        [['programming', 'code', 'test', 'javascript', 'function'], ['code', 'test']],
        [['', '', 'a', 'ab', 'abc'], ['', '']],
        [['one', 'two', 'three'], ['one', 'two']]
    ];

    let passed = 0;

    for (let i = 0; i < tests.length; i++) {
        const [input, expected] = tests[i];
        const result = mostFrequentStringLengths(input);

        if (arraysEqual(result.sort(), expected.sort())) {
            console.log(`✅ Test ${i + 1}: PASS`);
            passed++;
        } else {
            console.log(`❌ Test ${i + 1}: FAIL`);
            console.log(`   Expected: [${expected.join(', ')}]`);
            console.log(`   Got: [${result.join(', ')}]`);
        }
    }

    console.log(`\n${passed}/${tests.length} tests passed`);
}

test();