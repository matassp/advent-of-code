function maxJoltage(batteries) {
    const maxLocation = findMaxLocation(batteries);

    let right = batteries.length - 1;
    let left = maxLocation !== right ? maxLocation : 0;
    let maxVal = -Infinity;

    while (left < right) {
        const leftDigit = parseInt(batteries[left]);
        const rightDigit = parseInt(batteries[right]);

        const currentJoltage = parseInt(batteries[left] + batteries[right]);
        maxVal = Math.max(maxVal, currentJoltage);

        if (leftDigit < rightDigit) {
            left++;
        } else {
            right--;
        }
    }

    return maxVal;
}

function findMaxLocation(batteries) {
    return batteries.split('').reduce(
        (acc, curr, idx) => {
            if (Number(curr) > Number(acc.max)) {
                return { max: curr, index: idx };
            }
            return acc;
        },
        { max: -Infinity, index: -1 }
    ).index;
}

console.log(maxJoltage('987654321111111')); // 98
console.log(maxJoltage('811111111111119')); // 89
console.log(maxJoltage('234234234234278')); // 78
console.log(maxJoltage('818181911112111')); // 92

import fs from 'fs';

function readInputFile(path = 'input.txt') {
    const text = fs.readFileSync(path, 'utf8');

    const lines = text.trim().split('\n');

    return lines;
}

const lines = readInputFile();

let sum = 0;
lines.forEach(line => {
    sum = sum + maxJoltage(line);
});
console.log('answer: ', sum);
