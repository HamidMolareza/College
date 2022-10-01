const { Pool } = require("pg");

const TABLE_WEATHER = {
  TABLE_NAME: "Weather",
  ID: "id",
  RECORD_DATE: "recordDate",
  TEMPERATURE: "temperature",
};

function create_pool() {
  return new Pool({
    user: "postgres",
    password: "postgres",
    database: "postgres",
    port: 35000,
    host: "localhost",
  });
}

module.exports = { create_pool, TABLE_WEATHER };
