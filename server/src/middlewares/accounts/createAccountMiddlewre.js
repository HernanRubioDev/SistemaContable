import isEmpty from "../../utils/isEmpty.js"
import { accountNameValidation, accountRolValidation, accountTypeValidation} from "../../validators/accounts/createAccountValidator.js"

const createAccountMiddleware = async (req, res, next)=>{
  const {name, recive_credit, account_type} = req.body
  const errors = {...await accountNameValidation(name), ...accountRolValidation(recive_credit), ...accountTypeValidation(account_type)}
  
  try {
    isEmpty(errors) ? next() : res.status(errors.status).json({validations: errors})
  } catch (error) {
    res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
  }
}

export default createAccountMiddleware;