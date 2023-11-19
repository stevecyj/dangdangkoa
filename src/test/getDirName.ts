import path from "path";

console.log("process.cwd()", process.cwd());
const fullpath = path.join(process.cwd(), "/src/router");
console.log("fullpath", fullpath);
console.log("__dirname", __dirname);
export {};
