import express from 'express';

const port = 3014;      // Definição da porta
const app = express();   // Invocação do express

app.use(express.urlencoded({ extended: true }));    // Definição para leitura do que vem no corpo da requisição
app.use(express.json());    // Definição para leitura de arquivos JSON


// rotas = endpoints
app.get('/', (req, res) =>{
    res.json({message: 'Primeira rota criada com sucesso!'});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});