/*
 * npm init -y
 * npm install express express-handlebars mysql2
 * npm install --save-dev nodemon
 */

import express from 'express';
import { create } from 'express-handlebars';
import pool from './db/connection.js';

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

    pool.query(sql_insert, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/books');
    })

}); 

app.get('/books', (req, res) => {

    const sql_select = 'SELECT * FROM books';

    pool.query(sql_select, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        const books = data
        console.log(data);

        res.render('books', { books })

    })
})

app.get('/books/:id', (req, res) => {
     
    const id = req.params.id
    const sql_select_id = `SELECT * FROM books WHERE id = ${id}`

    pool.query(sql_select_id, function(err, data) {

        if (err) {
            console.error(err);
            return;
        }
        
        const book = data[0]; 
        res.render('book',{ book });
    })

});

app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id;
    const sql_select_id = `SELECT * FROM books WHERE id = ${id}`;


    pool.query(sql_select_id, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const book = data[0]; 
        res.render('editbook',{ book });
    })

});

app.post('/books/updatebook',(req, res) => {

    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;
    
    const sql_update = `UPDATE books SET title = '${title}', pageqty = ${pageqty} WHERE id = ${id}`;

    pool.query(sql_update, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        res.redirect('/books')
    })
});


app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id;
    const sql_delete = `DELETE FROM books WHERE id = ${id}`

    pool.query(sql_delete, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        res.redirect('/books')
    })
});

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
