const fs = require("fs");
const argv = process.argv.slice(2);

const data = fs.readFileSync(argv[0], "utf8").split(/[\r\n]+/g);
// const data = "-6, +3, +8, +5, -6".split(", ");

let accum = 0;
let history = [];

while (true) {
  for (let i = 0; i < data.length; i++) {
    history.push(accum);
    if (history.includes(accum + parseInt(data[i]))) {
      result = accum + parseInt(data[i]);
      break;
    } else {
      accum += parseInt(parseInt(data[i]));
    }
  }

  if (typeof result !== "undefined") {
    console.log("result:", result);
    break;
  }
}
