import fs from "node:fs";
import path from "node:path";

const filePath = path.join(__dirname, "input.txt");
const lines = fs.readFileSync(filePath, "utf8").split("\n");

let result = 0;

for (const line of lines) {
  // TODO
  const numsFromStr = line
    .split("")
    .filter((char) => !isNaN(char))
    .map(Number);

  result += numsFromStr[0] + numsFromStr[numsFromStr.length - 1];
}

console.log(result);
