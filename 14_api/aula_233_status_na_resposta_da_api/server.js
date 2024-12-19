/*
    Respostas Informativas (100 – 199)
    Respostas bem-sucedidas (200 – 299)
    Mensagens de redirecionamento (300 – 399)
    Respostas de erro do cliente (400 – 499)
    Respostas de erro do servidor (500 – 599)
*/

import express from 'express';

const port = 3014;      // Definição da porta
const app = express();   // Invocação do express

app.use(express.urlencoded({ extended: true }));    // Definição para leitura do que vem no corpo da requisição
app.use(express.json());    // Definição para leitura de arquivos JSON


// rotas = endpoints
app.post('/createproduct', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (!name) {
        res.status(422).json({ message: 'O campo nome é obrigatório!' });
        return;
    }

    res.status(201).json({ message: `O produto ${name} foi criado com sucesso e seu preço é R$ ${price}` })
});

app.get('/', (req, res) =>{
    res.status(200).json({message: 'Primeira rota criada com sucesso!'});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});