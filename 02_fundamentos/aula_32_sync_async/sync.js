const fs = require("fs");

console.log("Início");

fs.writeFileSync("arquivoSYNC.txt", "Olá Mundo!");

console.log("Fim");