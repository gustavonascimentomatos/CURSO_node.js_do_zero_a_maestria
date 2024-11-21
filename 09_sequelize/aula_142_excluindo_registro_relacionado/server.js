 /*
 * npm init -y
 * npm install express express-handlebars sequelize mysql2
 * npm install --save-dev nodemon
 */

import express from 'express';
import { create } from 'express-handlebars';
import connection from './db/connection.js';
import User from './models/User.js';
import Address from './models/Address.js';

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

app.get('/users', async (req, res) => {

    const users = await User.findAll({raw: true});

    res.render('users', { users });

});

app.get('/users/create', (req, res) => {
    res.render('adduser');
});

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
    res.redirect('/users');

});

app.get('/users/:id', async (req, res) => {

    const id = req.params.id;

    try {

        const user = await User.findOne({ include:Address, where: { id } });
        res.render('user', { user: user.get({ plain: true }) });

    } catch (error) {
        console.log(error);
    }
    
});

app.post('/users/delete/:id', async (req, res) => {

    const id = req.params.id;

    await User.destroy({ where: {id} });

    res.redirect('/users');
});

app.get('/users/edit/:id', async (req, res) => {

    const id = req.params.id;

    try {

        const user = await User.findOne({ include:Address, where: { id } });
        res.render('edituser', { user: user.get({ plain: true }) });

    } catch (error) {
        console.log(error);
    }

});

app.post('/users/update', async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    const userData = { id, name, occupation, newsletter };

    await User.update(userData, { where: { id } });

    res.redirect('/users')

});

app.post('/address/create', async (req, res) => {

    const UserId =  req.body.UserId;
    const pais =  req.body.pais;
    const cep =  req.body.cep;
    const estado =  req.body.estado;
    const cidade =  req.body.cidade;
    const bairro =  req.body.bairro;
    const logradouro =  req.body.logradouro;
    const numero =  req.body.numero;
    const complemento =  req.body.complemento;
    const referencia =  req.body.referencia;

    const address = {
        UserId,
        pais,
        cep,
        estado,
        cidade,
        bairro,
        logradouro,
        numero,
        complemento,
        referencia
    }

    await Address.create(address);

    res.redirect(`/users/${UserId}`);

});

app.post('/address/delete', async (req, res) => {

    const UserId = req.body.UserId;
    const id = req.body.id;

    await Address.destroy({ where: { id } });
    
    res.redirect(`/users/${UserId}`);

});

app.get('/', (req, res) => {
    res.render('home');
});

connection
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}!`);
        });
}).catch((Error) => console.log(Error));
