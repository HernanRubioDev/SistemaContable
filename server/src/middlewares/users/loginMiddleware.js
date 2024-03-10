import {getUserByEmail} from "../../models/userModel.js"
import isEmpty from "../../utils/isEmpty.js";
import {emailValidation, passwordValidation} from "../../validators/users/loginValidator.js"

const loginMiddleware = async (req, res, next)=>{
  const {email, password} = req.body
  try {
    const user = await getUserByEmail(email);
    const errors = {...emailValidation(email), ...await passwordValidation(user, password)}
    req.user = user.rows[0];
    isEmpty(errors) ? next() : res.status(errors.status).json({errors: errors})
  } catch (error) {
    
  }
}

export default loginMiddleware;