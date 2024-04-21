import isEmpty from "../../utils/isEmpty.js";
import { accountNameValidation, idAccountValidation } from "../../validators/accounts/accountDataValidation.js";
import { minorAccountValidaton, movementQuantityValidation } from "../../validators/accounts/deleteTypeAccountValidation.js";

const editAccountDataMiddleware = async (req, res, next)=>{
  const {name, id_account, code} = req.body
  
  const errors = {...accountNameValidation(name), ...idAccountValidation(id_account), ...await movementQuantityValidation(id_account), ...await minorAccountValidaton(code)}

  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default editAccountDataMiddleware;