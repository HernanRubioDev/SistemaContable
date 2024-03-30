import isEmpty from "../../utils/isEmpty.js"
import createAccountValidator from "../../validators/accounts/createAccountValidator.js"

const createAccountMiddleware = async (req, res, next)=>{
  const account = req.body
  const errors = await createAccountValidator(account)
  try {
    isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
  } catch (error) {
    res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
  }
}

export default createAccountMiddleware;