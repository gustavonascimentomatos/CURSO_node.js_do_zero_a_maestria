const fs = require("fs");

fs.stat("arquivo.txt", (err, stats) => {

    if (err) {
        console.log(err);
        return;
    } else {
        console.log(`É arquivo:  ${stats.isFile()}`);
        console.log(`É diretório:  ${stats.isDirectory()}`);
        console.log(`É link simbolico:  ${stats.isSymbolicLink()}`);
        console.log(`Data criação: ${stats.ctime}`);
        console.log(`Tamanho: ${stats.size} bytes`);
    }

});
 