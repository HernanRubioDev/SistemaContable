import { getUserAuth } from "../../models/userModel.js";
import isEmpty from "../../utils/isEmpty.js";
import authValidator from "../../validators/users/authValidatior.js";

const authMiddleware = async (req, res, next)=>{
  const user_ip = req.connection.remoteAddress;
  const {auth_token} = req.params

  try {
    const auth = await getUserAuth(auth_token, user_ip);
    req.roles = auth.rows[0].roles
    const errors= {...await authValidator(auth)}
    isEmpty(errors) ? next() : res.status(errors.status).json({message: errors.message})
    
  } catch (error) {
    res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
  }

}

export default authMiddleware;