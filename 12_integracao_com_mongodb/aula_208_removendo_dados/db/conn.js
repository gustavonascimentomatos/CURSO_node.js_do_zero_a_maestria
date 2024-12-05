import { MongoClient } from 'mongodb';

const uri = "mongodb://192.168.100.215:27017/primeirobanco";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Conexão com o banco de dados MongoDB estabelecida com sucesso!');
    } catch (error) {
        console.log(error);
        console.log('Erro ao conectar ao banco de dados MongoDB:', error);
    }
}

run();

export default client;