import {pool} from '../../db.cjs'

const getAccountByName = async (name) =>{
  const accountQuery = "SELECT * FROM accounts WHERE name = $1";
  try {
    const accountQueryRes = await pool.query(accountQuery,[name]);
    return accountQueryRes
  } catch (error) {
    return null
  }
}

const getLastMajorAccountByType = async (account_type) =>{
  const majorAccountQuery = "SELECT code FROM accounts WHERE account_type = $1 AND recive_credit = false ORDER BY code ASC LIMIT 1";
  try {
    const res = pool.query(majorAccountQuery,[account_type]);
    return res
  } catch (error) {
    return null
  }
}

const getLastMinorAccountByCode = async (code, account_type) =>{
  const minorAccountQuery = "SELECT code FROM accounts WHERE code LIKE $1 AND code NOT LIKE '____0%' AND account_type = $2 GROUP BY code ORDER BY code DESC LIMIT 1";
  try {
    const res = await pool.query(minorAccountQuery, [code+'%', account_type]);
    return res
  } catch (error) {
    return null;
  }
}

const setAccount = async (account)=>{
  const {name, recive_credit, account_type, id_user, code} = account
  try {
    const createAccountQuery = `
    INSERT INTO accounts (name, recive_credit, account_type, date_creation, id_user, code)
    VALUES ($1, $2, $3, now(), $4, $5)`
    const res = await pool.query(createAccountQuery, [name, recive_credit, account_type, id_user, code]);
    return res
  } catch (error) {
    return null
  }
}

export {getAccountByName, getLastMajorAccountByType, getLastMinorAccountByCode, setAccount}