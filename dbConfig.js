const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'sanjoy2003',
  password: 'sanjoy123',
  database: 'banner_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL Database');
});

module.exports = db;
