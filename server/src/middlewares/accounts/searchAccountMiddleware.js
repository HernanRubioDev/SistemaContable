import isEmpty from "../../utils/isEmpty.js"
import searchAccountValidator from "../../validators/accounts/searchAccountValidation.js";

const searchAccountMiddleware = (req, res, next)=>{
  let account = req.query;
  if (account.date_from === '') account.date_from = '1970-01-01'
  if (account.date_to === '') account.date_to = new Date().toISOString().slice(0, 10)
  const errors = searchAccountValidator(account)
  isEmpty(errors) ? next() : res.status(errors.status).json({status: errors.status, message: errors.message})
}

export default searchAccountMiddleware