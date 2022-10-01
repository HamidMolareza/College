const { create_pool, TABLE_WEATHER } = require("./db");

async function insertData() {
  const pool = create_pool();

  try {
    const [recordDate, temperature] = process.argv.slice(2);

    await pool.query(
      `INSERT INTO ${TABLE_WEATHER.TABLE_NAME}(${TABLE_WEATHER.RECORD_DATE}, ${TABLE_WEATHER.TEMPERATURE}) VALUES ($1,$2)`,
      [recordDate, temperature]
    );
  } catch (error) {
    console.error(error);
  } finally {
    pool.end();
  }
}

insertData();
