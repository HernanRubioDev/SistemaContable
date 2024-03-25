const accountValidator = (account)=>{
  const {name, recive_credit, account_type, code} = account

  const nameValidation = (name)=>{
    const errors = {}
    switch (true) {
      case !name.trim():
        errors.name = "El campo 'Nombre' es obligatorio."
        break;

      case name.lengh < 3 || name.length > 10:
        errors.name = "El campo 'Nombre' debe contener entre 3 y 10 caracteres."
        break;

      default:
        delete errors.name
    }
    return errors
  }

  const reciveCreditValidation = (recive_credit)=>{
    const errors = {}
    const types = ['true', 'false']
    switch (true) {
      case !types.includes(recive_credit):
        errors.recive_credit = "El campo 'Recibe crédito' contiene valores incorrectos."
        break;
    
      default:
        delete errors.recive_credit
        break;
    }
    return errors
  }

  const accountTypeValidation = (account_type)=>{
    const errors = {}
    const types = ['A','P','R-','R+']
    switch (true) {
      case !types.includes(account_type):
        errors.accout_type = "El tipo de cuenta no es válido."
        break;
    
      default:
        delete errors.accout_type
        break;
    }
    return errors
  }

  const codeValidation = (code)=>{
    const errors = {}
    const codeRegEx = /^[1-5][0-9]{4}$/
    switch (true) {
      case !recive_credit && !codeRegEx.test(code):
        errors.code = "Formato de código inválido."
        break;

      default:
        delete errors.code
        break;
    }
    return errors
  }
  const errors = {...nameValidation(name), ...reciveCreditValidation(recive_credit), ...accountTypeValidation(account_type), ...codeValidation(code)}
  return errors
}

export default accountValidator