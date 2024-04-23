const accountValidator = (account)=>{
  const {name, recive_credit, account_type, code} = account
  
  const nameValidation = (name)=>{
    const errors = {}
    switch (true) {
      case !name.trim():
        errors.message = "El campo 'Nombre' es obligatorio."
        break;

      case name.lengh < 3 || name.length > 20:
        errors.message = "El campo 'Nombre' debe contener entre 3 y 20 caracteres."
        break;

      default:
        delete errors.message
    }
    return errors
  }

  const reciveCreditValidation = (recive_credit)=>{
    const errors = {}
    const types = ['true', 'false']
    switch (true) {
      case !types.includes(recive_credit):
        errors.message = "El campo 'Recibe crédito' contiene valores incorrectos."
        break;
    
      default:
        delete errors.message
        break;
    }
    return errors
  }

  const accountTypeValidation = (account_type)=>{
    const errors = {}
    const types = ['A','P','R-','R+', 'Pa']
    switch (true) {
      case !types.includes(account_type):
        errors.message = "El tipo de cuenta no es válido."
        break;
    
      default:
        delete errors.message
        break;
    }
    return errors
  }

  const codeValidation = (code, recive_credit)=>{
    const errors = {}
    const codeRegEx = /^[1-5][0-9]{4}$/
    switch (true) {
      case recive_credit==='true' && !code:
        errors.message = "El campo 'Código' no puede estar vacio."
        break;

      case recive_credit==='true' && !codeRegEx.test(code):
        errors.message = "Formato de código inválido."
        break;

      default:
        delete errors.message
        break;
    }
    return errors
  }
  const errors = {...nameValidation(name), ...reciveCreditValidation(recive_credit), ...accountTypeValidation(account_type), ...codeValidation(code, recive_credit)}
  return errors
}

export default accountValidator