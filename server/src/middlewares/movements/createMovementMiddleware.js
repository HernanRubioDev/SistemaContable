import isEmpty from "../../utils/isEmpty.js"
import { dateFromValidation, descriptionMovementValidation, linesDataValidation, linesMovementValidation, movementBalanceValidation } from "../../validators/movements/dataMovementValidator.js"

const createMovementMiddleware = (req, res, next)=>{
  const {movement_date, movement_description, lines} = req.body
  const errors = {...dateFromValidation(movement_date), ...descriptionMovementValidation(movement_description), ...linesMovementValidation(lines), ...linesDataValidation(lines), ...movementBalanceValidation(lines)}
  isEmpty(errors) ? console.log("next") : res.status(errors.status).json({status:errors.status, message:errors.message})
}

export default createMovementMiddleware