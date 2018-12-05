const fs = require("fs");
const argv = process.argv.slice(2);

const data = fs.readFileSync(argv[0], "utf8").split(/[\r\n]+/g);

let twoCount = 0;
let threeCount = 0;

data.forEach(string => {
  let twoOccur = false;
  let threeOccur = false;
  let history = [];

  for (let i = 0; i < string.length; i++) {
    if (!history.includes(string[i])) {
      let check = new RegExp(string[i], "g");
      let charOccurrences = string.match(check).length;

      if (charOccurrences === 2 && !twoOccur) twoOccur = true;
      if (charOccurrences === 3 && !threeOccur) threeOccur = true;

      history.push(string[i]);
    }
  }

  if (twoOccur) twoCount++;
  if (threeOccur) threeCount++;
});

console.log("Result:", twoCount * threeCount);
