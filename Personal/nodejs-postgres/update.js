const { create_pool, TABLE_WEATHER } = require("./db");

async function update() {
  const pool = create_pool();
  try {
    const [id, recordDate, temperature] = process.argv.slice(2);

    await pool.query(
      `UPDATE ${TABLE_WEATHER.TABLE_NAME}   
       SET ${TABLE_WEATHER.RECORD_DATE} = $1,
           ${TABLE_WEATHER.TEMPERATURE} = $2
       WHERE ${TABLE_WEATHER.ID}  = $3
      `,
      [recordDate, temperature, id]
    );
  } catch (error) {
    console.error(error);
  } finally {
    pool.end();
  }
}

update();
