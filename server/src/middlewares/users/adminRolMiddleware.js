import isEmpty from "../../utils/isEmpty.js"
import adminRolValidation from "../../validators/users/adminRolValidation.js"

const adminRolMiddleware = (req, res, next)=>{
  const {roles} = req
  try {
    const errors = {...adminRolValidation(roles)}
    isEmpty(errors) ? next() : res.status(errors.status).json({meesage: errors.message})
  } catch (error) {
    res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
  }
}

export default adminRolMiddleware;