const searchMovementValidator = (dates)=>{
  const {date_from, date_to} = dates
  const dateFromValidation = (date_from)=>{
    const errors = {}
    const dateRegEx = /^([0-9]{4})-([0]{1}[1-9]|[12][0-9]|3[01])-([0]{1}[1-9]|1[0-2])$/

    switch (true) {
      case !date_from:
        errors.message="La 'Fecha desde' es obligatoria"
        errors.status=400
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
    const dateRegEx = /^([0-9]{4})-([0]{1}[1-9]|[12][0-9]|3[01])-([0]{1}[1-9]|1[0-2])$/

    switch (true) {
      case !date_to:
        errors.message = "La 'Fecha hasta' es obligatoria"
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

export default searchMovementValidator;