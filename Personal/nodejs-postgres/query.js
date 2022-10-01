// https://leetcode.com/problems/rising-temperature
// https://github.com/HamidMolareza/LeetCode/tree/master/Solutions/rising-temperature

const { create_pool, TABLE_WEATHER } = require("./db");

async function retrieveData() {
  const pool = create_pool();

  try {
    const res = await pool.query(`
    SELECT w2.${TABLE_WEATHER.ID}
    FROM ${TABLE_WEATHER.TABLE_NAME} w1, ${TABLE_WEATHER.TABLE_NAME} w2
    WHERE w2.${TABLE_WEATHER.RECORD_DATE} - w1.${TABLE_WEATHER.RECORD_DATE} = 1
    AND w2.${TABLE_WEATHER.TEMPERATURE} > w1.${TABLE_WEATHER.TEMPERATURE}
    `);
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  } finally {
    pool.end();
  }
}

retrieveData();
