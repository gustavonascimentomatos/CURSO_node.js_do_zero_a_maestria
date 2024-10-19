const fs = require("fs");

console.log("Início");

fs.writeFile("arquivoASYNC.txt", "Hello World!", function(err) {
    setTimeout(function() {
        console.log("Arquivo criado!") 
    }, 5000);
});

console.log("Fim");
