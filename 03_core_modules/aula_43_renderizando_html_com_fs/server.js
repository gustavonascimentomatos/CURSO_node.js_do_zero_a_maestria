const http = require("http");
const fs = require("fs");
const PORT = 3005;

const server = http.createServer((req, res) => {

    fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });

});

server.listen(PORT, () => {
    console.log(`Escutando na porta: ${PORT}`);
});
