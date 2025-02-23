const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "sathikali",
    host: "localhost",
    port: 5432,
    database: "gtnauthdb",

});

module.exports = pool;