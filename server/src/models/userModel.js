import {pool} from '../../db.cjs'

const setUser = async (user)=>{
  const {name, last_name, email, password} = user;
  
  const registerUserQuery = "INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING email, id_user";
  const userRoleQuery = "INSERT INTO users_roles (id_rol, id_user) values ($1, $2)"
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

const setUserAuth = async (id_user, auth_token)=>{
  const authUserQuery = `
  INSERT INTO users_sessions (auth_token, id_user, expiration_date) 
  VALUES ($1, $2, CURRENT_TIMESTAMP + INTERVAL '30 days')
  RETURNING 
    auth_token, 
    (
      SELECT 
        JSON_BUILD_OBJECT(
          'name', u.name,
          'last_name', u.last_name,
          'email', u.email,
          'rol', r.rol_name
        ) AS user_data
      FROM 
        users u 
        INNER JOIN users_roles ur ON u.id_user = ur.id_user 
        INNER JOIN roles r ON ur.id_rol = r.id_rol 
      WHERE 
        u.id_user = $3
    ) AS user;
`;  try {
    const res = await pool.query(authUserQuery, [auth_token, id_user, id_user])
    return res
  } catch (error) {
    console.log(error)
    return null;
  }
}

const deleteUserAuth = async(auth_token) =>{
  const deleteAuthQuery = "DELETE FROM users_sessions WHERE auth_token = $1"
  try {
    const deletAuthRes = pool.query(deleteAuthQuery, [auth_token]);
    return deletAuthRes
  } catch (error) {
    return null
  }
}

const getUserEmail = async (email)=>{
  const getEmailQuery = "SELECT * FROM users WHERE email = $1";

  try {
    const res = await pool.query(getEmailQuery, [email]);
    return res
  } catch (error) {
    return null;
  }
}


export {setUser, getUserEmail, setUserAuth, deleteUserAuth}