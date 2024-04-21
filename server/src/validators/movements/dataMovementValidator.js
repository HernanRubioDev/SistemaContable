
  const dateFromValidation = (date_from)=>{
    const errors = {}
    const dateRegEx = /^([0-9]{4})-([0]{1}[1-9]|1[0-2])-([0]{1}[1-9]|[12][0-9]|3[01])$/

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
    const dateRegEx = /^([0-9]{4})-([0]{1}[1-9]|1[0-2])-([0]{1}[1-9]|[12][0-9]|3[01])$/

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

  const descriptionMovementValidation = (movement_description)=>{
    const errors = {}
    const descriptionRegEx = /^[0-9a-zA-Z ]+$/g;
    switch (true) {
      case !movement_description:
        errors.message = "El campo 'Descripción' es obligatiorio."
        errors.status = 400
        break;

      case movement_description.trim() === "":
        errors.message = "El campo 'Descripción' es obligatiorio."
        errors.status = 400
        break;
    
      case !descriptionRegEx.test(movement_description):
        errors.message = "La descripción no acepta carácteres especiales."
        errors.status = 400
        break;
    
      case movement_description.length < 3 || movement_description.length > 30:
        errors.message = "La descripción debe contener entre 3 y 30 carácteres."
        errors.status = 400
        break;
    }
    return errors
  }

  const linesMovementValidation = (lines)=>{
    const errors = {}
    switch (true) {
      case !lines:
        errors.message = "El asiento no posee movimientos."
        errors.status = 400
        break;

      case lines.length < 2:
        errors.message = "El asiento debe poseer al menos 2 movimientos."
        errors.status = 400
        break;
    }
    return errors
  }

  const linesDataValidation = (lines) => {
    const accountNameRegEx = /^[a-zA-Z ]+$/g;
    const accountTypeRegEx = /^(debe|haber)$/g
    const lineAmountRegEx = /^\d+$/
    const errors = {};

    lines.forEach((line) => {
      switch (true) {
        case !line.hasOwnProperty("account"):
        case !line.hasOwnProperty("type"):
        case !line.hasOwnProperty("amount"):
          errors.message = "Datos de movimiento insuficientes.";
          errors.status = 400;
          break;

        case accountNameRegEx.test(line.account)=="false":
          errors.message = "La cuenta solo acepta letras.";
          errors.status = 400;
          break;

         case accountTypeRegEx.test(line.type)=="false":
          errors.message = "Error en el tipo de movimineto.";
          errors.status = 400;
         break

         case lines.amount < 0:
          errors.message = "El monto no puede ser negtivo.";
          errors.status = 400;
         break

         case !lineAmountRegEx.test(line.amount)=="false":
          errors.message = "El monto solo puede ser numérico.";
          errors.status = 400;
         break
      }
    });
    return errors;
  };

  function movementBalanceValidation(lines) {
    const errors = {}
    let totalDebe = 0;
    let totalHaber = 0;
    lines.forEach(line => {
      if (line.type === "credit") {
        totalDebe += parseInt(line.amount);
      } else if (line.type === "debit") {
        totalHaber += parseInt(line.amount);
      }
    });
    if(totalDebe !== totalHaber){
      errors.message = "El asiento no está balanceado."
      errors.status = 400;
    }
    return errors
  }

export {dateFromValidation, dateToValidation, descriptionMovementValidation, linesMovementValidation, linesDataValidation, movementBalanceValidation};