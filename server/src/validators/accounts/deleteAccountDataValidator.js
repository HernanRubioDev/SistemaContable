const deleteAccountDataValidator = (account)=>{
  const {id_account, recive_credit} = account
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

  const accountTypeValidation = (recive_credit)=>{
    const errors = {}
    const types = [true, false]
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

  const errors = {...idAccountValidation(id_account), ...accountTypeValidation(recive_credit)}
  return errors
}

export default deleteAccountDataValidator