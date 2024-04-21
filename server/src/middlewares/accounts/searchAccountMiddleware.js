import isEmpty from "../../utils/isEmpty.js"
import { dateFromValidation, dateToValidation } from "../../validators/accounts/accountDataValidation.js";

const searchAccountMiddleware = (req, res, next)=>{
  let {date_from, date_to} = req.query

  if (date_from === '') req.query.date_from = '1970-01-01'
  if (date_to === '') req.query.date_to = new Date().toISOString().slice(0, 10)

  const errors = {...dateFromValidation(req.query.date_from), ...dateToValidation(req.query.date_to)}
  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default searchAccountMiddleware