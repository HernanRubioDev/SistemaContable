import { getUserByEmail } from "../../models/userModel.js";

  const nameValidation = (name)=>{
    const  error = {}
    const nameRegEx = /^[a-zA-Z ]+$/g;
    switch (true) {
      case !name:
        error.name = "El campo 'Nombre' es obligatorio."
        error.status = 400;
        break;
    
      case name.trim().length < 3 || name.trim().length > 20:
        error.name = "El campo 'Nombre' debe contener entre 3 y 20 caracteres."
        error.status = 400;
        break;
    
      case !nameRegEx.test(name.trim()):
        error.name = "Este campo solo acepta letras."
        error.status = 400;
        break;

      default:
        delete error.name;
        break;
    }
    return error;
  }

  const lastNameValidation = (last_name)=>{
    const  error = {}
    const nameRegEx = /^[a-zA-Z ]+$/g;
    switch (true) {
      case !last_name:
        error.last_name = "El campo 'Nombre' es obligatorio."
        error.status = 400;
        break;
    
      case last_name.trim().length < 3 || last_name.trim().length > 20:
        error.last_name = "El campo 'Nombre' debe contener entre 3 y 20 caracteres."
        error.status = 400;
        break;
    
      case !nameRegEx.test(last_name.trim()):
        error.last_name = "Este campo solo acepta letras."
        error.status = 400;
        break;

      default:
        delete error.last_name;
        break;
    }
    return error;
  }

  const emailValidation = async (email)=>{
    const errors = {}
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailCheck = await getUserByEmail(email);
    switch (true) {
      case !email:
        errors.email = "El campo 'Email' es obligatorio."
        errors.status = 400;
        break;
      
      case email.length < 3 || email.length > 80:
        errors.email = "El campo 'Email' debe contener entre 3 y 80 caracteres.";
        errors.status = 400;
        break

      case !emailRegEx.test(email):
        errors.email = "Formato de Email inválido."
        errors.status = 400;
        break;

      case emailCheck === null:
        errors.email = "Se ha producido un error al validar el mail. Intentelo más tarde."
        errors.status = 500;

      case emailCheck.rowCount > 0:
        errors.email = "Este email ya está en uso."
        errors.status = 409;
        break;

      default:
        delete errors.email
        delete errors.status
        break;
    }
    return errors;
  }

  const passwordValidator = (password, re_password)=>{
    const errors = {}
    const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    switch (true) {
      case !password:
        errors.password = "Este campo es obligatorio."
        errors.status = 400;
        break;

      case password.trim().length < 3 || password.trim().length > 30:
        errors.password = "La contraseña debe contener entre 8 y 30 caracteres."
        errors.status = 400;
        break;

      case !passRegEx.test(password.trim()):
        errors.password = "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número."
        errors.status = 400;
        break

      case password.trim() !== re_password.trim():
        errors.password = "Las contraseñas no coinciden."
        errors.re_password = "Las contraseñas no coinciden."
        errors.status = 400;
        break

      default:
        delete errors.password
        delete errors.re_password
        break;
    }
    return errors
  }


export {nameValidation, lastNameValidation, emailValidation, passwordValidator};