import {getAccountByName} from '../../models/accountModel.js'

const createAccountValidation = async (account)=>{
  const {name, recive_credit, account_type} = account
  const accountNameValidation = async(name)=>{
    const errors = {}
    const nameRegEx = /^[a-zA-Z ]+$/g;
    const account = await getAccountByName(name);
    switch (true) {
      case !name:
        errors.message = "El campo 'Nombre' es obligatorio."
        errors.status=400
        break;
  
      case name.trim() === "":
        errors.message = "El campo 'Nombre' es obligatorio."
        errors.status=400
        break;
  
      case !nameRegEx.test(name):
        errors.message = "El campo 'Nombre' solo puede contener letras."
        errors.status=400
        break;
  
      case account === null:
        errors.message = "Se ah producido un error al validar el nombre. Inténtelo mas tarde.";
        errors.status=500
        break;
  
      case account.rowCount !==0:
        if(name === account.rows[0].name) errors.message ="Ya existe una cuenta con ese nombre."
        errors.status = 400
        break;
    }
    return errors
  }
  
  const accountRolValidation = (recive_credit) =>{
    const errors = {}
    const types = ['true', 'false']
    switch (true) {
      case recive_credit === null || recive_credit === undefined:
        errors.message = "El campo 'Recibe Crédito' no puede estar vacío."
        errors.status=400
        break;
  
      case !types.includes(recive_credit):
        errors.message = "Error en el tipo de dato de 'Recibe Crédito'."
        errors.status=400
        break;
    }
    return errors
  }
  
  const accountTypeValidation = (account_type)=>{
    const errors = {}
    const types = ['A','P','R-','R+']
    switch (true) {
      case !account_type:
        errors.message="El campo 'Tipo de Cunta' es obligatorio."
        errors.status=400
        break;
  
      case account_type.trim() === "":
        errors.message="El campo 'Tipo de Cunta' es obligatorio."
        errors.status=400
        break;
  
      case !types.includes(account_type):
        errors.message="El tipo de cuenta solo puede ser 'A', 'P', 'R-' O 'R+'."
        errors.status=400
        break;
    }
    return errors
  }
  const errors = {...await accountNameValidation(name), ...accountRolValidation(recive_credit), ...accountTypeValidation(account_type)}
  return errors
}

export default createAccountValidation