import fs from "fs";

const cliPath = process.argv[1];
const realPath = fs.realpathSync(cliPath!).replace(/\\/g, "/");

console.log(cliPath);
console.log(realPath);
