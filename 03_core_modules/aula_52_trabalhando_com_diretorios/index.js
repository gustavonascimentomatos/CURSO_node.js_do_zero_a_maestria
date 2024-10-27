const fs = require("fs");

if (fs.existsSync("./minhapasta")) {
    console.log("O diretório 'minhapasta' já existe!");
} else {
    console.log("O diretório 'minhapasta' não existe!");
    fs.mkdirSync("minhapasta")

    if (fs.existsSync("./minhapasta")) {
        console.log("O diretório 'minhapasta' foi criado com sucesso!");
    }
}
