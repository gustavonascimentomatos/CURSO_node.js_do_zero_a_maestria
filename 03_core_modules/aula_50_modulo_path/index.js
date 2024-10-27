const path = require("path");

const customPath = "/relatorio/gustavo/relatorio1.pdf";

console.log(`Caminho: ${path.dirname(customPath)}`);
console.log(`Nome: ${path.basename(customPath)}`);
console.log(`Extensão: ${path.extname(customPath)}`);
 