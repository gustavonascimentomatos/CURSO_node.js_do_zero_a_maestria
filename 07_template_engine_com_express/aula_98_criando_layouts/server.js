/* 
    npm init -y
    npm install express express-handlebars
    npm install --save-dev nodemon
    Criar o diretório /views
    Criar o arquivo home.handlebars
    Criar o diretório /views/layouts
    Criar o arquivo main.handlebars
    Remover do app.get('/') o layout: false
    Incluir {{{body}}} no arquivo main.handlebars
*/

import express from 'express';
import { create } from 'express-handlebars';

const port = 3007;

// Configura o Handlebars
const hbs = create({});
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
