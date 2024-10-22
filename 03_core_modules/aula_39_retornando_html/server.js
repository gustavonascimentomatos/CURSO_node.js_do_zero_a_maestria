const http = require("http");
const PORT = 3005;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Contenty-Type", "Text/html");

    res.end('<html lang="pt-br"><head><meta charset="UTF-8"><title>HTTP Server</title></head><body><h1>Olá, este é meu primeiro server com HTML!</h1></body></html>');

});

server.listen(PORT, () => {
    console.log(`Escutando na porta: ${PORT}`);
});
