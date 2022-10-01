const { create_pool, TABLE_WEATHER } = require("./db");

async function retrieveData() {
  const pool = create_pool();
  try {
    const res = await pool.query(`
    SELECT * FROM ${TABLE_WEATHER.TABLE_NAME}
    ORDER BY ${TABLE_WEATHER.ID}
    `);
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  } finally {
    pool.end();
  }
}

retrieveData();
