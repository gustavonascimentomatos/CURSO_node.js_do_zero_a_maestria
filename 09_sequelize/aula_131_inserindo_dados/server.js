/*
 * npm init -y
 * npm install express express-handlebars sequelize mysql2
 * npm install --save-dev nodemon
 */

import express from 'express';
import { create } from 'express-handlebars';
import connection from './db/connection.js';
import User from './models/User.js';

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

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    await User.create({name, occupation, newsletter});
    res.redirect('/');

})

app.get('/', (req, res) => {
    res.render('home');
});

connection.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}!`);
    });
}).catch((Error) => console.log(Error));
