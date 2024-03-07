import {pool} from '../../db.cjs'

const setUser = async (user)=>{
  const {name, last_name, email, password} = user;
  
  const registerUserQuery = `
    INSERT INTO users (name, last_name, email, password) 
    VALUES ($1, $2, $3, $4) 
    RETURNING email, id_user`;
  const userRoleQuery = `INSERT INTO users_roles (id_rol, id_user) values ($1, $2)`
  const client = await pool.connect();

  try {
    client.query('BEGIN')
    const resgisterUserRes = await pool.query(registerUserQuery,[name, last_name, email, password]);
    const id_user = resgisterUserRes.rows[0].id_user
    const userRolRes = await pool.query(userRoleQuery,[2,id_user])
    delete resgisterUserRes.rows[0].id_user
    client.query('COMMIT')
    return resgisterUserRes
  } catch (error){
    client.query('ROLLBACK')
    return null
  }
  finally{
    client.release()
  }
}

const setUserAuth = async (id_user, auth_token, user_ip)=>{
  const authUserQuery = `
  INSERT INTO users_sessions (auth_token, id_user, user_ip, last_login, expiration_date) 
  VALUES ($1, $2, $3, NOW(), CURRENT_TIMESTAMP + INTERVAL '30 days')
  ON CONFLICT (user_ip) DO UPDATE
  SET auth_token = EXCLUDED.auth_token, expiration_date = EXCLUDED.expiration_date
  RETURNING 
    auth_token, 
    (
      SELECT 
        JSON_BUILD_OBJECT(
          'name', u.name,
          'last_name', u.last_name,
          'email', u.email,
          'roles', (
            SELECT JSON_AGG(r.rol_name)
            FROM roles r 
            JOIN users_roles ur ON r.id_rol = ur.id_rol 
            WHERE ur.id_user = u.id_user
          )
        ) AS user_data
      FROM 
        users u 
      WHERE 
        u.id_user = $4
    ) AS user;
`;
    try {
      const authUserRes = await pool.query(authUserQuery, [auth_token, id_user, user_ip, id_user])
      return authUserRes
  } catch (error) {
    return null;
  }
}

const getUserAuth = async (auth_token, user_ip) =>{
  const userAuthQuery = `SELECT *, to_char(expiration_date, 'YYYY-MM-DD') AS expiration_date FROM users_sessions WHERE auth_token = $1 AND user_ip = $2`
  
  try {
    const userAuthRes = await pool.query(userAuthQuery, [auth_token, user_ip])
    return userAuthRes
  } catch (error) {
    return null
  }
}

const deleteUserAuth = async(auth_token, user_ip) =>{
  const deleteAuthQuery = "DELETE FROM users_sessions WHERE auth_token = $1 AND user_ip = $2"
  try {
    const deleteAuthRes = await pool.query(deleteAuthQuery, [auth_token, user_ip]);
    return deleteAuthRes;
  } catch (error) {
    return null
  }
}

const getUserEmail = async (email)=>{
  const getEmailQuery = "SELECT * FROM users WHERE email = $1";

  try {
    const getEmailRes = await pool.query(getEmailQuery, [email]);
    return getEmailRes
  } catch (error) {
    return null;
  }
}


export {setUser, getUserEmail, setUserAuth, getUserAuth, deleteUserAuth}