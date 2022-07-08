const Pool = require("pg").Pool;
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const connectionString =
  "postgres://plpcqfkrtmrjlr:3ead3945576a2e1b0c1eb89d55990e926381e41a7f395dfa40a1e3974f9cb9c5@ec2-3-222-74-92.compute-1.amazonaws.com:5432/d9s7l4i954d422";

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
