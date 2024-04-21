import {getAccountByName} from '../../models/accountModel.js'

const idAccountValidation = (id_account)=>{
  const errors = {}
  const idRegEx = /^\d+$/g
  switch (true) {
    case !id_account || id_account === '':
      errors.message="Los datos datos de la cuenta son insuficientes."
      errors.status=400
      break;

    case !idRegEx.test(id_account):
      errors.message="Formato de dato inválido."
      errors.status=400
      break;
  }
  return errors
}

const accountRolValidation = (recive_credit)=>{
  const errors = {}
  const types = ["true", "false"]
  switch (true) {
    case recive_credit===undefined || recive_credit === '':
      errors.message="Los datos datos de la cuenta son insuficientes."
      errors.status=400
      break;

    case !types.includes(recive_credit):

      errors.message="Formato de dato inválido."
      errors.status=400
      break;
  }
  return errors
}

const accountNameValidation = (name)=>{
  const errors = {}
  const nameRegEx = /^[a-zA-Z ]+$/g;
  switch (true) {
    case name===undefined || name === '':
      errors.message="El campo 'Nombre' es obligatorio."
      errors.status=400
      break;

    case !nameRegEx.test(name):
      errors.message="El nombre solo puede contener letras y espacios."
      errors.status=400
      break;

    case name.length < 3 || name.length > 30:
      errors.message="El nombre debe contener entre 3 y 30 carácteres."
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

const accountCodeValidation = (code, recive_credit)=>{
  const errors = {}
  const codeRegEx = /^[1-5]\d{4}$/g
  switch (true) {
    case !code && recive_credit:
      errors.message = "El código de la cuenta es obligatorio."
      errors.status = 400
      break;

    case !codeRegEx.test(code) && recive_credit:
      errors.message = "Formato de código incorrecto."
      errors.status = 400
      break;
  }
  return errors
}

const accountNameExistValidation = async(name)=>{
  const errors = {}
  const account = await getAccountByName(name);

  switch (true) {
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

const dateFromValidation = (date_from)=>{
  const errors = {}
  const dateRegEx = /^([0-9]{4})-([0]{1}[1-9]|1[0-2])-([0]{1}[1-9]|[12][0-9]|3[01])$/
  switch (true) {
    case date_from === '':
      errors.message = "El campo 'Desde' es obligatorio."
      errors.status = 400
      break;

    case !dateRegEx.test(date_from):
      errors.message = "Formato de fecha inválido."
      errors.status = 400
      break
  }
  return errors
}

const dateToValidation = (date_to)=>{
  const errors = {}
  const dateRegEx = /^([0-9]{4})-([0]{1}[1-9]|1[0-2])-([0]{1}[1-9]|[12][0-9]|3[01])$/
  switch (true) {
    case date_to === '':
      errors.message = "El campo 'Desde' es obligatorio."
      errors.status = 400
      break;

    case !dateRegEx.test(date_to):
      errors.message = "Formato de fecha inválido."
      errors.status = 400
      break
  }
  return errors
}

export {idAccountValidation, accountRolValidation, accountNameValidation, accountTypeValidation, accountCodeValidation, accountNameExistValidation, dateFromValidation, dateToValidation}