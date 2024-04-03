const searchAccountValidator = (account)=>{
  const {date_from, date_to} = account
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

  const errors = {...dateFromValidation(date_from), ...dateToValidation(date_to)}
  return errors
}

export default searchAccountValidator