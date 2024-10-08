
//For Local DB
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'chatriwale_db'
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
  

module.exports = db;


//For Remote DB
// const mysql = require('mysql2');

// // Create a connection pool
// const db = mysql.createPool({
//   port: 3306,
//   connectionLimit: 10, // Maximum number of connections to create at once
//   host: 'localhost',
//   user: 'qpdtkzda_qpdtkzda',
//   password: '7[BO4a4p4jYr[U',
//   database: 'qpdtkzda_chatriwale_db'
// });

// // Test the connection from the pool
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
  
//   console.log('Connected to MySQL database');
  
//   // Release the connection back to the pool after it's used
//   connection.release();
// });

// // Export the pool for use in other parts of your app
// module.exports = db;

