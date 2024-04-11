import {pool} from '../../db.cjs'

const setMovement = async (movement) => {
  const { movement_date, movement_description, lines } = movement;
  const client = await pool.connect();
  const addLineQuery = `INSERT INTO lines (id_account, move_type, line_amount) VALUES ((SELECT id_account FROM accounts WHERE name = $1), $2, $3) RETURNING id_line;`
  const addMoveQuery = `INSERT INTO moves (move_date, description) VALUES ($1, $2) RETURNING id_move`
  const addMoveLineQuery = `INSERT INTO moves_lines (id_move, id_line) VALUES ($1, $2)`
  try {
    await client.query('BEGIN'); //Arreglar la transaccion porque no funciona bien.
    const moveRes = await client.query(addMoveQuery, [movement_date, movement_description]);
    const linesPromises = lines.map(async (line) => {
      const lineRes = await client.query(addLineQuery, [line.account, line.type, line.ammount]);
      await client.query(addMoveLineQuery, [moveRes.rows[0].id_move, lineRes.rows[0].id_line]);
      return lineRes;
    });
    const res = await Promise.all(linesPromises);
    await client.query('COMMIT');
    return res;
  } catch (error) {
    await client.query('ROLLBACK');
    return null
  } finally {
    client.release();
  }
};

const getMovement = async (dates)=>{
  const {date_from, date_to} = dates
  const query = `SELECT *, to_char(move_date, 'DD/MM/YYYY') AS move_date FROM moves WHERE move_date BETWEEN $1 AND $2`
  try {
    const res = await pool.query(query, [date_from, date_to])
    return res
  } catch (error) {
    return null;
  }
}

export {setMovement, getMovement}