const http = require("http");
const fs = require("fs");

const PORT = 3005;

const server = http.createServer((req, res) => {

    const urlInfo = require("url").parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile("index.html", function(err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        });
    } else {

        const nameNewLine = "Nome: " + name + "\r\n";

        fs.appendFile("arquivo.txt", nameNewLine, function(err, data) {
            res.writeHead(302, {
                location: "/"
            })
            return res.end();
        })
    }

});

server.listen(PORT, () => {
    console.log(`Escutando na porta: ${PORT}`);
});
