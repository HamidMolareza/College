const { create_pool, TABLE_WEATHER } = require("./db");

async function init() {
  const pool = create_pool();

  try {
    await pool.query(`DROP TABLE IF EXISTS ${TABLE_WEATHER.TABLE_NAME}`);
    await pool.query(
      `CREATE TABLE IF NOT EXISTS ${TABLE_WEATHER.TABLE_NAME}(
        ${TABLE_WEATHER.ID} SERIAL PRIMARY KEY,
        ${TABLE_WEATHER.RECORD_DATE} date,
        ${TABLE_WEATHER.TEMPERATURE} int
        )`
    );
    await pool.query(`Truncate TABLE ${TABLE_WEATHER.TABLE_NAME};`);
    await pool.query(
      `INSERT INTO ${TABLE_WEATHER.TABLE_NAME}(${TABLE_WEATHER.RECORD_DATE},${TABLE_WEATHER.TEMPERATURE}) values
      ('2015-01-01','10'),
      ('2015-01-02','25'),
      ('2015-01-03','20'),
      ('2015-01-04','30');`
    );
  } catch (error) {
    console.error(error);
  } finally {
    pool.end();
  }
}

init();
