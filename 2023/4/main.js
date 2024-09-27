import fs from "node:fs";
import path from "node:path";

const filePath = path.join(__dirname, "input.txt");
const lines = fs.readFileSync(filePath, "utf8").split("\n");

let result = 0;

for (const line of lines) {
  const [winningNums, nums] = line
    .split(":")[1]
    .split("|")
    .map((str) => str.split(" ").map(Number).filter(Boolean));

  const winningNumsSet = new Set(winningNums);

  let sum = 0;

  for (const num of nums) {
    if (winningNumsSet.has(num)) {
      if (!sum) sum = 1;
      else sum *= 2;
    }
  }

  result += sum;
}

console.log(result);
