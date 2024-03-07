import isEmpty from "../../utils/isEmpty.js";
import registerValidator from '../../validators/users/registerValidator.js';

const registerMiddleware = async (req, res, next)=>{

  const user = req.body

  const errors = await registerValidator(user)

  isEmpty(errors) ? 
  next() 
  : 
  res.status(400).json({validations: errors});
  
}

export default registerMiddleware;