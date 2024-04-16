import isEmpty from "../../utils/isEmpty.js"
import deleteAccountDataValidator from "../../validators/accounts/deleteAccountDataValidator.js"

const deleteAccountDataMiddleware = (req, res, next)=>{
  const account = req.body
  const errors = deleteAccountDataValidator(account)
  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default deleteAccountDataMiddleware