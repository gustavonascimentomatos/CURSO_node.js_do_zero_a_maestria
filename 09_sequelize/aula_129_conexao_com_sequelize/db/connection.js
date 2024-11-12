import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nodesequelize', 'matos','Matos@123', {
    host: '192.168.100.215',
    dialect: 'mysql',
});

try {

    sequelize.authenticate();
    console.log('Conexão com Banco de Dados realizada com sucesso!');

} catch (error) {

    console.log(`Não foi possível conectar ao Banco de Dados: ${error}`);

}

export default sequelize;
