const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'johan',
    password: 'johan',
    database: 'blog',
    insecureAuth: true
});

module.exports = db;