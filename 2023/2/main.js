import fs from "node:fs";
import path from "node:path";

const filePath = path.join(__dirname, "input.txt");
const lines = fs.readFileSync(filePath, "utf8").split("\n");

const Colors = {
  BLUE: "blue",
  RED: "red",
  GREEN: "green",
};
const COLORS_MAX_AMOUNT = {
  [Colors.BLUE]: 14,
  [Colors.GREEN]: 13,
  [Colors.RED]: 12,
};

let result = 0;

main: for (const line of lines) {
  const [title, gamesStr] = line.split(":");
  const [, gameId] = title.split(" ");

  const turns = gamesStr
    .split(";")
    .flatMap((str) => str.split(","))
    .map((str) => str.trim().split(" "));

  const acc = {};

  for (const [amount, color] of turns) {
    acc[color] = (acc[color] || 0) + +amount;

    if (COLORS_MAX_AMOUNT[color] < acc[color]) continue main;
  }

  result += +gameId;
}

console.log(result);
