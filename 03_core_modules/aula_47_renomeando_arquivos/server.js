const fs = require("fs");

const oldArquivo = "arquivo.txt"
const newArquivo = "Arquivo Renomeado.txt"

fs.rename(oldArquivo, newArquivo, function(err) {
    
    if(err) {
        console.log(err);
        return;
    } else {
        console.log("Arquivo renomeado!");
    }

})
