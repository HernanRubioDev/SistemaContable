import bcrypt from 'bcrypt'

const emailValidation = (email)=>{
  const errors={}
  switch (true) {
    case !email:
        errors.username = "El campo 'Email' es obligatorio."
        errors.status = 400
      break;

    default:
      delete errors.username
      delete errors.status
      break;
  }
  return errors;
}

const passwordValidation = async (user, password)=>{
  const errors = {}

  switch (true) {
    case !password:
      errors.password = "Este campo es obligatorio."
      errors.status = 400
      break;

    case user.rowCount === 0:
      errors.email = "No es ha encontrado una cuenta asociada a éste email."
      errors.status = 404
      break

    case !await bcrypt.compare(password, user.rows[0].password):
      errors.status = 403
      errors.password = "La contraseña o el email es incorrecto."
      break;

    default:
      delete errors.password
      delete errors.status
      break;
  }
  return errors;
}

export {emailValidation, passwordValidation};