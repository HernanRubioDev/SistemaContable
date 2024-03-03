import isEmpty from "../../utils/isEmpty.js";
import registerValidator from '../../validators/users/registerValidator.js';

const registerMiddleware = async (req, res, next)=>{

  const user = req.body

  const validations = await registerValidator(user)

  isEmpty(validations) ? 
  next() 
  : 
  res.status(400).json({validations: validations});
  
}

export default registerMiddleware;