
import isEmpty from "../../utils/isEmpty.js"
import { dateFromValidation, dateToValidation } from "../../validators/movements/dataMovementValidator.js"

const searchMovementMiddleware = (req, res, next) => {
  const account = req.query
  if(account.date_from === '' || !account.date_from) account.date_from = '1970-01-01'
  if (account.date_to === '' || !account.date_to) account.date_to = new Date().toISOString().slice(0, 10)
  if (account.name === '' || !account.name) account.name = ""

  const error = {...dateFromValidation(account.date_from), ...dateToValidation(account.date_to)}
  isEmpty(error) ? 
  next() :
  res.status(error.status).json({status: error.status, message: error.message}) 
}

export default searchMovementMiddleware;