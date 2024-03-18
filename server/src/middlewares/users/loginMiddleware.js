import {getUserByEmail} from "../../models/userModel.js"
import isEmpty from "../../utils/isEmpty.js";
import {emailValidation, passwordValidation} from "../../validators/users/loginValidator.js"

const loginMiddleware = async (req, res, next)=>{
  const {email, password} = req.body
  try {
    const user = await getUserByEmail(email);
    const errors = {...emailValidation(email), ...await passwordValidation(user, password)}
    req.user = user.rows[0];
    isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, validations: errors})
  } catch (error) {
    res.status(500).json({message:"Se a producido un error inesperado. Inténtelo más tarde."})
  }
}

export default loginMiddleware;