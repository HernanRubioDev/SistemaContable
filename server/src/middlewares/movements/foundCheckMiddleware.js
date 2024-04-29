import isEmpty from "../../utils/isEmpty.js"
import foundCheckValidation from "../../validators/movements/foundCheckValidator.js";

const foundCheckMiddleware = async (req, res, next)=>{
  const movement = req.body
  const errors = await foundCheckValidation(movement.lines)

  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})


}

export default foundCheckMiddleware;