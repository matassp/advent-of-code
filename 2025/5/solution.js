import fs from 'fs';

function readInputFile(path = 'input.txt') {
    const text = fs.readFileSync(path, 'utf8');

    const lines = text.trim().split('\n');

    return lines;
}

const lines = readInputFile();

const indexToSplit = lines.indexOf('');
const ranges = lines.slice(0, indexToSplit).map(range => range.split('-').map(Number));
const ingredients = lines.slice(indexToSplit + 1).map(Number);

let freshCount = 0;
ingredients.forEach(ingredient => {
    for (let index = 0; index < ranges.length; index++) {
        const [start, end] = ranges[index];
        if (ingredient >= start && ingredient <= end) {
            freshCount++;
            break;
        }
    }
})

console.log(freshCount)