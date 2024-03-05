import {pool} from '../../../db.cjs'
import { getUserEmail } from '../../models/userModel.js';

const registerValidator = async (user)=>{
  
  const {name, last_name, email, password, re_password} = user
  const nameRegEx = /^[a-zA-Z ]+$/g;
  let errors = {}

  const nameValidation = (name)=>{
    const  error = {}
    switch (true) {
      case !name:
        error.name = "El campo 'Nombre' es obligatorio."
        break;
    
      case name.trim().length < 3 || name.trim().length > 20:
        error.name = "El campo 'Nombre' debe contener entre 3 y 20 caracteres."
        break;
    
      case !nameRegEx.test(name.trim()):
        error.name = "Este campo solo acepta letras."
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
        break;
    
      case last_name.trim().length < 3 || last_name.trim().length > 20:
        error.last_name = "El campo 'Nombre' debe contener entre 3 y 20 caracteres."
        break;
    
      case !nameRegEx.test(last_name.trim()):
        error.last_name = "Este campo solo acepta letras."
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
    const emailCheck = await getUserEmail(email);
    switch (true) {
      case !email:
        errors.email = "El campo 'Email' es obligatorio."
        break;
      
      case email.length < 3 || email.length > 80:
        errors.email = "El campo 'Email' debe contener entre 3 y 80 caracteres.";
        break

      case !emailRegEx.test(email):
        errors.email = "Formato de Email inválido."
        break;

      case emailCheck.rowCount !== 0:
        errors.email = "Este email ya está en uso."
        break;

      default:
        delete errors.email
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
        break;

      case password.trim().length < 3 || password.trim().length > 30:
        errors.password = "La contraseña debe contener entre 8 y 30 caracteres."
        break;

      case !passRegEx.test(password.trim()):
        errors.password = "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número."
        break

      case password.trim() !== re_password.trim():
        errors.password = "Las contraseñas no coinciden."
        errors.re_password = "Las contraseñas no coinciden."
        break

      default:
        delete errors.password
        delete errors.re_password
        break;
    }
    return errors
  }

  return errors = {...nameValidation(name), ...lastNameValidation(last_name), ...await emailValidation(email), ...passwordValidator(password, re_password)}
}

export default registerValidator;