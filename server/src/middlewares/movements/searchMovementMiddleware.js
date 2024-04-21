
import isEmpty from "../../utils/isEmpty.js"
import { dateFromValidation, dateToValidation } from "../../validators/movements/dataMovementValidator.js"

const searchMovementMiddleware = (req, res, next) => {
  const dates = req.query
  if(dates.date_from === '' || !dates.date_from) dates.date_from = '1970-01-01'
  if (dates.date_to === '' || !dates.date_to) dates.date_to = new Date().toISOString().slice(0, 10)

  const error = {...dateFromValidation(dates.date_from), ...dateToValidation(dates.date_to)}
  isEmpty(error) ? 
  next() :
  res.status(error.status).json({status: error.status, message: error.message}) 
}

export default searchMovementMiddleware;