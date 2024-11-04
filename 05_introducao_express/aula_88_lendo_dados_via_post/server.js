const express = require('express');
const path = require('path');
const app = express();
const port = 3006;

const basePath = path.join(__dirname, 'templates');

// Ler o corpo da requisição
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/user/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    res.sendFile(`${basePath}/userform.html`);

    console.log(`Name: ${name}, Age: ${age}`);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    // Leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário ${id}`);

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
