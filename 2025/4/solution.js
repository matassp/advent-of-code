import fs from 'fs';

function readInputFile(path = 'input.txt') {
    const text = fs.readFileSync(path, 'utf8');

    const lines = text.trim().split('\n');

    return lines;
}

const lines = readInputFile();

const grid = makeGrid(lines);

function makeGrid(lines) {
    const grid = [];
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        const symbols = line.split('').map(symbol => (symbol === '@' ? 1 : 0));
        grid[index] = symbols;
    }
    return grid;
}

const transformations = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [0, -1],
];

function getAccessibleRolls(grid) {
    let getAccessibleRolls = 0;
    for (let x = 0; x < grid.length; x++) {
        const row = grid[x];
        for (let y = 0; y < row.length; y++) {
            const element = row[y];
            if (element === 1) {
                let rollNeighbourCount = 0;
                transformations.forEach(transformation => {
                    const transformedX = x + transformation[0];
                    const transformedY = y + transformation[1];
                    const neighbour = grid?.[transformedX]?.[transformedY] ?? 0;
                    if (neighbour === 1) {
                        rollNeighbourCount++;
                    }
                });

                // eslint-disable-next-line max-depth
                if (rollNeighbourCount < 4) {
                    getAccessibleRolls++;
                }
            }
        }
    }
    return getAccessibleRolls;
}

console.log(grid);
console.log(getAccessibleRolls(grid));
