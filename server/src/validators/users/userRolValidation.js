
const adminRolValidation = (roles)=>{
  const errors = {}
  try {
    switch (true) {
      case !roles.includes("USER"):
        errors.message = "No tiene los permisos necesarios."
        errors.status = 403
        break;
    }
  } catch (error) {
    error.status = 500
    error.message = "Ah ocurrindo un error inesperado. Inténtelo más tarde."
  }
  return errors
}

export default adminRolValidation