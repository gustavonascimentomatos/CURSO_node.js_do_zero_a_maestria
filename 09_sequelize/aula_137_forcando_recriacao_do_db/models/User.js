import { DataTypes } from 'sequelize';
import db from '../db/connection.js';

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
});

export default User;