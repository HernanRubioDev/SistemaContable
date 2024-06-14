import isEmpty from "../../utils/isEmpty.js";
import {nameValidation, lastNameValidation, emailValidation, passwordValidator} from "../../validators/users/registerValidator.js"
const registerMiddleware = async (req, res, next)=>{

  const {name, last_name, email, password, re_password} = req.body
  const errors = {...nameValidation(name), ...lastNameValidation(last_name), ...await emailValidation(email), ...passwordValidator(password, re_password)}
  isEmpty(errors) ? 
  next()
  : 
  res.status(errors.status).json({status: errors.status, validations: errors});
  
}

export default registerMiddleware;