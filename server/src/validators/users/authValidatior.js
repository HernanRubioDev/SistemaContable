import { deleteUserAuth} from "../../models/userModel.js";

const authValidator = async (auth)=>{
  const error = {}
  const {auth_token, user_ip} = auth.rows[0]
  const today = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
  switch (true) {
    case auth.rowCount === 0 || auth === undefined:
      error.message="Usuario no autorizado."
      error.status = 401
      break;

    case auth.rows[0].expiration_date === today:
      await deleteUserAuth(auth_token, user_ip)
      error.message="Su sesión ha expirado."
      error.status = 401
      break; 

    default:
      delete error.message
      delete error.status
  }
  return error
}

export default authValidator;