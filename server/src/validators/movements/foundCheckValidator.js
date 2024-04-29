import { getAccountByName } from "../../models/accountModel.js";

const foundCheckValidation = async (lines) => {
  const errors = {};
  const types = {
    "debit": {
      "A": "+", "P": "-", "R+": "-", "R-": "+", "Pa": "+"
    },
    "credit": {
      "A": "-", "P": "+", "R+": "+", "R-": "-", "Pa": "-"
    }
  };
  for (const line of lines) {
    try {
      const account = await getAccountByName(line.account);
      if (account.rowCount !== 0) {
        switch (types[line.type][account.rows[0].account_type]) {
          case "+":
            if ((account.rows[0].partial_credit + parseFloat(line.amount) < 0)) {
              errors.message = `La cuenta '${line.account}' no tiene suficiente crédito.`;
              errors.status = 400;
            }
            break;

          case "-":
            if ((account.rows[0].partial_credit - parseFloat(line.amount) < 0)) {
              errors.message = `La cuenta '${line.account}' no tiene suficiente crédito.`;
              errors.status = 400;
            }
            break;
        }
      } else {
        errors.message = `No se ha encontrado la cuenta '${line.account}'`;
        errors.status = 404;
      }
    } catch (error) {
      errors.message = `Se ha producido un error. Inténtelo más tarde.`;
      errors.status = 500;
    }
  }
  return errors
};

export default foundCheckValidation