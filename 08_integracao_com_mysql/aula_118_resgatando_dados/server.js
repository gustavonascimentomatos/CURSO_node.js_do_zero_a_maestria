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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/books/insertbook', (req, res) => {
    
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql_insert = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    connection.query(sql_insert, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/books');
    })

}); 

app.get('/books', (req, res) => {

    const sql_select = 'SELECT * FROM books';

    connection.query(sql_select, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        const books = data
        console.log(data);

        res.render('books', { books })

    })
})

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