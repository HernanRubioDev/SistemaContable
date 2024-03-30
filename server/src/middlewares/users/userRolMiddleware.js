import isEmpty from "../../utils/isEmpty.js"
import userRolValidation from "../../validators/users/userRolValidation.js"

const userRolMiddleware = (req, res, next)=>{
  const {roles} = req.user
  try {
    const errors = {...userRolValidation(roles)}
    isEmpty(errors) ? next() : res.status(errors.status).json({meesage: errors.message})
  } catch (error) {
    res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
  }
}

export default userRolMiddleware;