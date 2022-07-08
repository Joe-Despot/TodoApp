const Pool = require("pg").Pool;
require("dotenv").config();


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = "postgres://plpcqfkrtmrjlr:3ead3945576a2e1b0c1eb89d55990e926381e41a7f395dfa40a1e3974f9cb9c5@ec2-3-222-74-92.compute-1.amazonaws.com:5432/d9s7l4i954d422; //heroku addons";
console.log("db.js log: " + process.env.DATABASE_URL);

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : proConfig,
});

module.exports = pool;