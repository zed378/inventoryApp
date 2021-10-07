// init mysql driver
const mysql = require("mysql2");

// if use mysql.createConnection, permit access to database is single
// create connection with pool to make connection limit
// it can permit access to db connection more than 1 simultaneously
const connectionPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: null,
    database: "db_inventory",
    connectionLimit: 10,
});

module.exports = connectionPool;
