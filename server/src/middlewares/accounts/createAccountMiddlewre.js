import isEmpty from "../../utils/isEmpty.js"
import {accountRolValidation, accountNameValidation, accountTypeValidation, accountNameExistValidation, accountCodeValidation } from "../../validators/accounts/accountDataValidation.js"

const createAccountMiddleware = async (req, res, next)=>{
  const {name, recive_credit, account_type, code} = req.body
  const errors = {...accountNameValidation(name), ...accountRolValidation(recive_credit), ...accountTypeValidation(account_type), ...accountCodeValidation(code, recive_credit) ,...await accountNameExistValidation(name)}
  try {
    isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
  } catch (error) {
    res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
  }
}

export default createAccountMiddleware;