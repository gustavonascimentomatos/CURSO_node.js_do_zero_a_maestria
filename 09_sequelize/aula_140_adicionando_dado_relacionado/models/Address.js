import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
import User from "./User.js";

const Address = db.define('Address', {

    pais: {
        type: DataTypes.STRING,
        required: true,
    },
    cep: {
        type: DataTypes.STRING,
        required: true,
    },
    estado: {
        type: DataTypes.STRING,
        required: true,
    },
    cidade: {
        type: DataTypes.STRING,
        required: true,
    },
    bairro: {
        type: DataTypes.STRING,
        required: true,
    },
    logradouro: {
        type: DataTypes.STRING,
        required: true,
    },
    numero: {
        type: DataTypes.STRING
    },
    complemento: {
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    }
});

Address.belongsTo(User);

export default Address;
