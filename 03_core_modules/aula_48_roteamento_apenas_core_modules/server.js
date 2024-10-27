const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = 3005;

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1);

    if (fileName.includes("html")) {
        if (fs.existsSync(fileName)) {
            fs.readFile(fileName, function(err, data) {
                res.writeHead(200, { "content-type": "text/html" })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile("404.html", function(err, data) {
                res.writeHead(404, { "content-type": "text/html" })
                res.write(data)
                return res.end()
            })
        }
    } 

})

server.listen(PORT, () => {
    console.log(`Escutando na porta: ${PORT}`);
});