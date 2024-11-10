import mysql from 'mysql2';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '192.168.100.215',
    user: 'matos',
    password: 'Matos@123',
    database: 'nodemysql'
});

export default pool;
