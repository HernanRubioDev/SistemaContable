import isEmpty from "../../utils/isEmpty.js"
import deleteTypeAccountValidation from "../../validators/accounts/deleteTypeAccountValidation.js"

const deleteAccountMiddleware = async (req, res, next)=>{
  const account = req.body
  const errors = await deleteTypeAccountValidation(account)
  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default deleteAccountMiddleware