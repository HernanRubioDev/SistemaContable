import {pool} from '../../db.cjs'

const setMovement = async (movement) => {
  const types = {
    "debit": {
      "A": "+", "P": "-", "R+": "-", "R-": "+", "Pa": "+"
    },
    "credit": {
      "A": "-", "P": "+", "R+": "+", "R-": "-", "Pa": "-"
    }
  };

  const { movement_date, movement_description, lines } = movement;
  const client = await pool.connect();
  try {
    
    await client.query('BEGIN');

    const addLineQuery = `INSERT INTO lines (id_account, move_type, line_amount) VALUES ((SELECT id_account FROM accounts WHERE name = $1), $2, $3) RETURNING id_line;`
    const addMoveQuery = `INSERT INTO moves (move_date, description) VALUES ($1, $2) RETURNING id_move`
    const addMoveLineQuery = `INSERT INTO moves_lines (id_move, id_line) VALUES ($1, $2)`
    const incrementPartialCredit = `UPDATE accounts SET partial_credit = partial_credit + $1 WHERE name = $2`
    const decrementPartialCredit = `UPDATE accounts SET partial_credit = partial_credit - $1 WHERE name = $2`
    
    const moveRes = await client.query(addMoveQuery, [movement_date, movement_description]);
    const linesPromises = lines.map(async (line) => {
      const lineRes = await client.query(addLineQuery, [line.account, line.type, line.amount]);
      await client.query(addMoveLineQuery, [moveRes.rows[0].id_move, lineRes.rows[0].id_line]);
      if(types[line.type][line.account_type] === "+"){
        await client.query(incrementPartialCredit, [line.amount, line.account])
      }
      else{
        await client.query(decrementPartialCredit, [line.amount, line.account])
      } 
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
  const {date_from, date_to, name} = dates
  const moveQuery = `SELECT 
  m.id_move,
  to_char(m.move_date, 'DD/MM/YYYY') AS move_date,
  m.description,
  JSON_AGG(JSON_BUILD_OBJECT('move_type', l.move_type, 'line_amount', l.line_amount, 'account', a.name)) AS lines
FROM 
  moves m
INNER JOIN 
  moves_lines ml ON m.id_move = ml.id_move
INNER JOIN 
  lines l ON ml.id_line = l.id_line
INNER JOIN 
  accounts a ON a.id_account = l.id_account
WHERE 
  m.move_date BETWEEN $1 AND $2 AND a.name LIKE $3
GROUP BY 
  m.id_move, m.move_date, m.description
ORDER BY 
  m.id_move ASC;`
  try {
    const res = await pool.query(moveQuery, [date_from, date_to, `%${name}%`])
    return res
  } catch (error) {
    return null;
  }
}

const getMovementsCountByAccountId = async (id_account)=>{
  const query = "SELECT COUNT(*) FROM lines WHERE id_account = $1"
  try {
    const res = await pool.query(query,[id_account])
    return res
  } catch (error) {
    return null
  }
}

const getAmountsSumByAccounts = async (positive_account, negative_account) =>{
  const query = `SELECT
  TO_CHAR(DATE_TRUNC('month', m.move_date), 'TMMonth') AS month,
  SUM(CASE WHEN a.account_type= 'R+' AND l.move_type='credit' THEN l.line_amount ELSE 0 END) AS r_plus_total,
  SUM(CASE WHEN a.account_type= 'R-' AND l.move_type='debit' THEN l.line_amount ELSE 0 END) AS r_minus_total
FROM
  moves m
JOIN
  moves_lines ml ON m.id_move = ml.id_move
JOIN
  lines l ON ml.id_line = l.id_line
JOIN
  accounts a ON l.id_account = a.id_account
WHERE
  (a.name = $1 AND a.account_type= 'R+') OR
  (a.name = $2 AND a.account_type= 'R-') AND
  m.move_date >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '6 months' AND
  m.move_date < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
GROUP BY
  DATE_TRUNC('month', m.move_date)
ORDER BY
  month;`
  try {
    const res = await pool.query(query,[positive_account, negative_account])
    return res
  } catch (error) {
    return null 
  }
}

export {setMovement, getMovement, getMovementsCountByAccountId, getAmountsSumByAccounts}