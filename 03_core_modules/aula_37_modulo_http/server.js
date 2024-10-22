const http = require("http");
const PORT = 3005;

const server = http.createServer((req, res) => {

    res.write("Hello HTTP");
    res.end();

});

server.listen(PORT, () => {
    console.log(`Escutando na porta: ${PORT}`);
});
