import bcrypt from 'bcrypt'

const emailValidation = (email)=>{
  const errors={}
  switch (true) {
    case !email:
        errors.username = "El campo 'Email' es obligatorio."
      break;

    default:
      delete errors.username
      break;
  }
  return errors;
}

const passwordValidation = async (user, password)=>{
  const errors = {}

  switch (true) {
    case !password:
      errors.password = "Este campo es obligatorio."
      break;

    case !await bcrypt.compare(password, user.rows[0].password):
      errors.status = 403
      errors.password = "La contraseña o el email son incorrectos."
      break;

    default:
      delete errors.password
      break;
  }
  return errors;
}

export {emailValidation, passwordValidation};