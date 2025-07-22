function mostFrequentStringLengths(strings) {
    if (!strings || strings.length === 0) return [];

    const lengthCounts = new Map();

    for (const str of strings) {
        const len = str.length;
        lengthCounts.set(len, (lengthCounts.get(len) || 0) + 1);
    }

    let mostFrequentLength = 0;
    let maxFreq = 0;

    for (const [len, freq] of lengthCounts) {
        if (freq > maxFreq) {
            maxFreq = freq;
            mostFrequentLength = len;
        }
    }

    const result = [];
    for (const str of strings) {
        if (str.length === mostFrequentLength) {
            result.push(str);
        }
    }

    return result;
}

module.exports = { mostFrequentStringLengths };
