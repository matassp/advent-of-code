import fs from "fs";

function readInputFile(path = "input.txt") {
  const text = fs.readFileSync(path, "utf8");

  const lines = text.trim().split("\n");

  return lines.map(line => line.split(''));
}

let lines = readInputFile();
console.log(lines.map(line => line.join('')));

let splitCount = 0;
for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];
  const nextLine = lines[i + 1];

  const beams = findAllSymbols(line, "S");

  beams.forEach(beam => {
    const nextInLine = nextLine[beam];
    if (nextInLine === '.') {
        lines[i + 1][beam] = 'S'
    }
    if (nextInLine === '^') {
        splitCount++;
        if (lines[i + 1]?.[beam -1]) {
            lines[i + 1][beam -1] = 'S'
        }
        if (lines[i + 1]?.[beam +1]) {
            lines[i + 1][beam +1] = 'S';
        }
    }
  })
}

console.log(lines.map(line => line.join('')));
console.log(splitCount);

function findAllSymbols(line, symbol) {
  const found = [];
  let i = 0;
  while (i !== -1) {
    i = line.indexOf(symbol, found.length === 0 ? undefined : i + 1);
    if (i !== -1) {
      found.push(i);
    }
  }
  return found;
}
