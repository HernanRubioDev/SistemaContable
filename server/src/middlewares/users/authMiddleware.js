import isEmpty from "../../utils/isEmpty.js";
import authValidator from "../../validators/users/authValidatior.js";

const authMiddleware = async (req, res, next)=>{
  const user_ip = req.connection.remoteAddress;
  const {auth_token} = req.params
  const errors = {...await authValidator(auth_token, user_ip)}
  isEmpty(errors) ? next() : res.status(errors.status).json({message: errors.message})
}

export default authMiddleware;