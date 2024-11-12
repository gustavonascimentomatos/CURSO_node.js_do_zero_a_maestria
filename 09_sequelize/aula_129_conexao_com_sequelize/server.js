/*
 * npm init -y
 * npm install express express-handlebars sequelize mysql2
 * npm install --save-dev nodemon
 */

import express from 'express';
import { create } from 'express-handlebars';
import connection from './db/connection.js';

const port = 3009;

// Configura o Handlebars
const hbs = create({
    partialsDir: ['views/partials']
});
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});
