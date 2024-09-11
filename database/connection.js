const mysql = require('mysql2')


// Create MySQL connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bahi_khata'
});

module.exports =  {conn};