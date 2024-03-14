import {getAccountByName} from '../../models/accountModel.js'

const accountNameValidation = async(name)=>{
  const errors = {}
  const nameRegEx = /^[a-zA-Z ]+$/g;
  const account = await getAccountByName(name);
  switch (true) {
    case !name:
      errors.name = "El campo 'Nombre' es obligatorio."
      errors.status=400
      break;

    case name.trim() === "":
      errors.name = "El campo 'Nombre' es obligatorio."
      errors.status=400
      break;

    case !nameRegEx.test(name):
      errors.name = "El campo 'Nombre' solo puede contener letras."
      errors.status=400
      break;

    case account === null:
      errors.name = "Se ah producido un error al validar el nombre. Inténtelo mas tarde.";
      errors.status=500
      break;

    case account.rowCount !==0:
      if(name === account.rows[0].name) errors.name ="Ya existe una cuenta con ese nombre."
      errors.status = 400
      break;

    default:
      delete errors.name;
      delete errors.status;
      break;

  }
  return errors;
}

const accountRolValidation = (recive_credit) =>{
  const errors = {}
  switch (true) {
    case recive_credit === null || recive_credit === undefined:
      errors.accountRol = "El campo 'Recibe Crédito' no puede estar vacío."
      errors.status=400
      break;

    case (typeof(recive_credit) !== "boolean"):
      errors.accountRol = "Error en el tipo de dato de 'Recibe Crédito'."
      errors.status=400
      break;

    default:
      delete errors.accountRol;
      errors.status
      break;
  }
  return errors;
}

const accountTypeValidation = (account_type)=>{
  const errors = {}
  const types = ['A','P','R-','R+']
  switch (true) {
    case !account_type:
      errors.account_type="El campo 'Tipo de Cunta' es obligatorio."
      errors.status=400
      break;

    case account_type.trim() === "":
      errors.account_type="El campo 'Tipo de Cunta' es obligatorio."
      errors.status=400
      break;

    case !types.includes(account_type):
      errors.account_type="El tipo de cuenta solo puede ser 'A', 'P', 'R-' O 'R+'."
      errors.status=400
      break;

    default:
      delete errors.account_type;
      errors.status
      break;
  }

  return errors;
}

export {accountNameValidation, accountRolValidation, accountTypeValidation}