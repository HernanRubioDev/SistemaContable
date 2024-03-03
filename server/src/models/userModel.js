import {pool} from '../../db.cjs'

import bcrypt from 'bcrypt'

const setUser = async (user)=>{
  user.password = await bcrypt.hash(user.password, 12);
  const {name, last_name, email, password} = user;
  
  const registerUserQuery = "INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING email";
  try {
    const res = await pool.query(registerUserQuery,[name, last_name, email, password]);
    return res
  } catch (error){
    return null
  }
}

export {setUser}