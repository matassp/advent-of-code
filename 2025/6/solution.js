import fs from "fs";

function readInputFile(path = "input.txt") {
  const text = fs.readFileSync(path, "utf8");

  const lines = text.trim().split("\n");

  return lines;
}

const lines = readInputFile();

const numbers = lines.slice(0, lines.length - 1).map((row) =>
  row
    .split(" ")
    .filter((item) => item !== "")
    .map(Number)
);
const symbols = lines[lines.length - 1]
  .split(" ")
  .filter((item) => item !== "");

const numOfProblems = numbers[0].length;
const problemDepth = numbers.length;

let sum = 0;
for (let i = 0; i < numOfProblems; i++) {
  let solution = 0;
  for (let j = 0; j < problemDepth; j++) {
    const number = numbers[j][i];
    const symbol = symbols[i];

    solution =
      symbol === "+"
        ? solution + number
        : (solution === 0 ? 1 : solution) * number;
  }
  sum = sum + solution;
}

console.log(sum);
