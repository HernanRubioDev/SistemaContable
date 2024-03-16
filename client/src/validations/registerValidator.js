const registerValidator = (user)=>{
  const {name, last_name, email, password, re_password} = user
  const nameRegEx = /^[a-zA-Z ]+$/g;

  const nameValidation = (name)=>{
    const errors = {}
    switch (true) {
      case !name.trim():
        errors.name = "Este campo es obligatorio."
        break;
  
      case !nameRegEx.test(name.trim()):
        errors.name = "El nombre solo acepta letras."
        break
  
      default:
        delete errors.name
        break;
    }
    return errors
  }

  const lastNameValidation= (last_name)=>{
    const errors = {}
    const lastNameRegEx = /^[a-zA-Z ]+$/g;
    switch (true) {
      case !last_name.trim():
        errors.last_name = "Este campo es obligatorio."
        break;
  
      case !lastNameRegEx.test(last_name.trim()):
        errors.last_name = "El nombre solo acepta letras."
        break
  
      default:
        delete errors.last_name
        break;
    }
    return errors
  }

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

      case password.length < 8 || password.length > 30:
        errors.password = "La contraseña debe contener entre 8 y 30 caracteres"
        break

      case !passRegEx.test(password):
        errors.password = "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número."
        break

      default:
        delete errors.password
        break;
    }
    return errors
  }

  const rePasswordValidation = (re_password, password)=>{
    const errors = {}
    
    switch (true) {
      case !re_password:
        errors.re_password = "Este campo es obligatorio."
        break;

      case re_password !== password:
        errors.re_password = "las contraseñas no coiciden."
        break
    
      default:
        delete errors.re_password
        break;
    }
    return errors
  }
  const errors = {...nameValidation(name), ...lastNameValidation(last_name), ...emailValidation(email), ...passwordValidation(password), ...rePasswordValidation(re_password, password)}
  return errors
}

export default registerValidator