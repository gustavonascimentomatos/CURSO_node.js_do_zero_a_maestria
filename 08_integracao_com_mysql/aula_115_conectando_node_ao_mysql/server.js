/*
 * npm init -y
 * npm install express express-handlebars mysql2
 * npm install --save-dev nodemon
 */

import express from 'express';
import { create } from 'express-handlebars';
import mysql from 'mysql2'

const port = 3008;

// Configura o Handlebars
const hbs = create({
    partialsDir: ['views/partials']
});
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const connection = mysql.createConnection({
    host: '192.168.100.215',
    user: 'matos',
    password: 'Matos@123',
    database: 'nodemysql'
});
  
connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Conexão com MySQL realizada com sucesso!');

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});
