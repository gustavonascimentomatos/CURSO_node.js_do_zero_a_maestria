import express from 'express';
import { create } from 'express-handlebars';
import connection from './db/connection.js';

const hbs = create({ partialsDir: ['views/partials'] }); // Configura o Handlebars
const port = 3010; // Definição da porta
const app = express(); // Invocação do express

app.engine('handlebars', hbs.engine);   // Definição da template engine
app.set('view engine', 'handlebars');   // Definição da propriedade de view engine
app.use(express.static('public'));      // Definicão de arquivos estaticos

app.use(express.urlencoded({ extended: true }));    // Definição para leitura do que vem no corpo da requisição
app.use(express.json());    // Definição para leitura de arquivos JSON

connection
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}!`);
        });
}).catch((Error) => console.log(Error));
