/**
 * npm init -y
 * npm install express express-handlebars mongodb
 * npm install --save-dev nodemon
 */

import express from 'express';
import { create } from 'express-handlebars';
import conn from './db/conn.js'
import prodctRoutes from './routes/productsRoutes.js';

const hbs = create({ partialsDir: ['views/partials'] }); // Configura o Handlebars
const port = 3012;      // Definição da porta
const app = express();   // Invocação do express

app.engine('handlebars', hbs.engine);   // Definição da template engine
app.set('view engine', 'handlebars');   // Definição da propriedade de view engine
app.use(express.static('public'));      // Definicão de arquivos estaticos

app.use(express.urlencoded({ extended: true }));    // Definição para leitura do que vem no corpo da requisição
app.use(express.json());    // Definição para leitura de arquivos JSON

app.use('/products', prodctRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});
