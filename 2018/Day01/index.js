const fs = require("fs");
const argv = process.argv.slice(2);

const data = fs.readFileSync(argv[0], "utf8").split(/[\r\n]+/g);

const result = data.reduce((accum, cur) => {
  return parseInt(accum) + parseInt(cur);
});

console.log(result);
