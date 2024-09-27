import fs from "node:fs";
import path from "node:path";

const filePath = path.join(__dirname, "input.txt");
const lines = fs.readFileSync(filePath, "utf8").split("\n");

let result = 0;

const SYMBOLS_SET = new Set("*/@&#=-+_%");
const chars = lines.map((line) => line.split(""));

for (let i = 0; i < chars.length; i++) {
  for (let j = 0; j < chars[0].length; j++) {
    if (SYMBOLS_SET.has(chars[i][j])) {
      for (const _i of [i - 1, i, i + 1]) {
        for (const _j of [j - 1, j, j + 1]) {
          try {
            if (!isNaN(chars[_i][_j])) {
              let acc = chars[_i][_j];
              let l_j = _j - 1;
              let r_j = _j + 1;

              while (!isNaN(chars[_i][l_j])) {
                acc = chars[_i][l_j] + acc;
                chars[_i][l_j] = ".";
                l_j--;
              }
              while (!isNaN(chars[_i][r_j])) {
                acc += chars[_i][r_j];
                chars[_i][r_j] = ".";
                r_j++;
              }
              console.log(acc);
              result += +acc;
            }
          } catch {}
        }
      }
    }
  }
}

console.log(result);
