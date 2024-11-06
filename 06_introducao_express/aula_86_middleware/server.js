const express = require('express');
const path = require('path');
const app = express();
const port = 3006;

const basePath = path.join(__dirname, 'templates');

const checkAuth = function(req, res, netx) {
    req.authStatus = true;
    
    if (req.authStatus) {
        console.log(`Está logado, pode continuar`);
        netx();
    } else {
        console.log(`Não está logado, faça o login para continuar `);
        netx();
    }
}

app.use(checkAuth);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
