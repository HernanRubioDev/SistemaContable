import isEmpty from "../../utils/isEmpty.js"
import { accountRolValidation, idAccountValidation } from "../../validators/accounts/accountDataValidation.js"

const deleteAccountDataMiddleware = (req, res, next)=>{
  const {id_account, recive_credit} = req.body
  const errors = {...idAccountValidation(id_account), ...accountRolValidation(String(recive_credit))}
  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default deleteAccountDataMiddleware