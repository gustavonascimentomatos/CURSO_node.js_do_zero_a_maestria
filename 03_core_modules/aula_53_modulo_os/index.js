const os = require("os");

console.log(os.cpus());
console.log(os.freemem() / (1024 ** 3));
console.log(os.homedir());
console.log(os.type());
