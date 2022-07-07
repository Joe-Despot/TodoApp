const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "87ZJ54Rugh",
    host: "localhost",
    port: 5432,
    database: "todo-app-database"
});

module.exports = pool;