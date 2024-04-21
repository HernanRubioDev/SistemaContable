import isEmpty from "../../utils/isEmpty.js"
import { minorAccountValidaton, movementQuantityValidation } from "../../validators/accounts/deleteTypeAccountValidation.js"

const deleteAccountMiddleware = async (req, res, next)=>{
  const {id_account, code, recive_credit} = req.body
  let errors = {}
  recive_credit ? errors = {...await movementQuantityValidation(id_account)} : errors = {...await minorAccountValidaton(code)}

  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default deleteAccountMiddleware