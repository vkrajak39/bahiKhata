
/**********************     My old code
 */


const mysql = require('mysql2')


// Create MySQL connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bahi_khata'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database!');
});

module.exports = { conn };

//  */

// ************ new connector code ****************

/**
// const mysql = require('mysql2');

// Singleton for MySQL connection
class Database 
{
    constructor() 
    {
        // Check if an instance already exists
        if (!Database.instance) {
            // Create a MySQL connection
            this.connection = mysql.createConnection({
                host: 'localhost',
                user: 'your_username',
                password: 'your_password',
                database: 'your_database'
            });

            // Connect to the MySQL database
            this.connection.connect((err) => {
                if (err) {
                    console.error('Error connecting to MySQL:', err);
                    return;
                }
                console.log('Connected to MySQL');
            });

            // Store the instance in the class itself
            Database.instance = this;
        }

        // Return the stored instance
        return Database.instance;
    }

    // Example method to execute a query
    query(sql, args) 
    {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    // Method to close the connection
    close() 
    {
        return new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

// Export the singleton instance
const instance = new Database();
Object.freeze(instance); // Freeze the instance to prevent modification

module.exports = instance;

 */