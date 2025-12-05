import fs from "fs";

function readInputFile(path = "input.txt") {
  const text = fs.readFileSync(path, "utf8");

  const lines = text.trim().split("\n");

  return lines;
}

function parseRotationString(string) {
  const tail = string.slice(1);
  return [string[0] === "L", Number(tail)];
}

const lines = readInputFile();

function rotate(angle, rotation) {
  // Rotation to left
  const normalizedAngle = rotation[1] % 100;
  if (rotation[0]) {
    const diff = angle - normalizedAngle;
    return diff < 0 ? 100 + diff : diff;
  } else {
    const sum = angle + normalizedAngle;
    return sum > 99 ? sum - 100 : sum;
  }
}

const START_ANGLE = 50;

const rotations = lines.map(parseRotationString);

let angle = START_ANGLE;
let password = 0;

for (let i = 0; i < rotations.length; i++) {
  const rotation = rotations[i];
  angle = rotate(angle, rotation);

  if (angle === 0) {
    password++;
  }
}

console.log(password);
