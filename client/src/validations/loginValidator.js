const loginValidator = (user)=>{
  const {email, password} = user

  const emailValidation = (email)=>{
    const errors = {}
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    switch (true) {
      case !email.trim():
        errors.email = "Este campo es obligatorio."
        break;

      case !emailRegEx.test(email):
        errors.email = "Formato de email inválido."
        break

      default:
        delete errors.email
        break;
    }
    return errors
  }

  const passwordValidation = (password)=>{
    const errors = {}
    const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    switch (true) {
      case !password.trim():
        errors.password = "Este campo es obligatorio."
        break;

      default:
        delete errors.password
        break;
    }
    return errors
  }

  const errors = {...emailValidation(email), ...passwordValidation(password)}
  return errors
}

export default loginValidator