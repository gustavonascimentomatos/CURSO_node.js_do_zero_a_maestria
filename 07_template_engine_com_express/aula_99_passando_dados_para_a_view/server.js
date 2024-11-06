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
    Criar uma constante com objeto com nome e sobrenome
    Adicionar no res.render { user: user }
    Adicionar entre {{objeto.atributo}} onde desejar no arquivo home.handlebars
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

    const user = {
        name: 'Bárbara',
        lastName: 'Campos',
        age: 28
    }

    res.render('home', { user: user });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
