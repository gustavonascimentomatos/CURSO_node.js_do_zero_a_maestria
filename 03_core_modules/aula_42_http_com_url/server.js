const http = require("http");
const PORT = 3005;

const server = http.createServer((req, res) => {

    // Quando a requisição chegar, chama o modulo url e "parsea" a url que vem pela requisição
    const urlInfo = require("url").parse(req.url, true);

    // Pega a urlInfo (url decomposta) que vem no query params e busco name
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader("Contenty-Type", "Text/html");

    if (!name) {
        res.end('<html lang="pt-br"><head><meta charset="UTF-8"><title>HTTP Server</title></head><body><h1>Preencha o seu nome<form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form></h1></body></html>');
    } else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
    }

});

server.listen(PORT, () => {
    console.log(`Escutando na porta: ${PORT}`);
});
