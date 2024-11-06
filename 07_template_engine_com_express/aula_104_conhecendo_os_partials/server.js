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
    Criar nova view dashboard.handlebars
    Inserir um {{#if auth}} {{/if}} com o conteúdo no meio
    Inserir um {{#each items}} {{this}} {{/each}} com o conteúdo no {{this}}
    Criar o diretório /views/partials
    Criar o arquivo post.handlebars
    Incluir no const hbs = create({ }); partialsDir: ['views/partials']
*/

import express from 'express';
import { create } from 'express-handlebars';

const port = 3007;

// Configura o Handlebars
const hbs = create({
    partialsDir: ['views/partials']
});
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender Node.js',
            comments: 9
        },
        {
            title: 'Aprender JAVA',
            category: 'JAVA',
            body: 'Este artigo vai te ajudar a aprender JAVA',
            comments: 25
        },
        {
            title: 'Aprender C++',
            category: 'C++',
            body: 'Este artigo vai te ajudar a aprender C++',
            comments: 12
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP',
            comments: 8
        }
    ]

    res.render('blog', { posts })
})

app.get('/dashboard', (req, res) => {

    const items = ["Item A", "Item B", "Item C"]

    res.render('dashboard', { items });
});

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    }

    res.render('blogspot', { post })
})

app.get('/', (req, res) => {

    const user = {
        name: 'Bárbara',
        lastName: 'Campos',
        age: 28
    }

    const auth = true;

    const approved = false;

    res.render('home', { user: user, auth, approved });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
