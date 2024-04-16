import { getAccountsByCode } from "../../models/accountModel.js"
import { getMovementsCountByAccountId } from "../../models/movementModel.js"

const deleteTypeAccountValidation = async (account)=>{
  const {recive_credit, id_account, code} = account
  const movementQuantityValidation = async ()=>{
    const errors = {}
    const res = await getMovementsCountByAccountId(id_account)
    switch (true) {
      case parseInt(res.rows[0].count) > 0:
        errors.message = "No se puede eliminar una cuenta con movimientos asociados."
        errors.status = 403
        break;
    }
    return errors
  }

  const minorAccountValidaton = async (code)=>{
    const errors = {}
    code = code.slice(0,3)
    const res = await getAccountsByCode(code)
    switch (true) {
      case res.rowCount > 1:
        errors.message = "Esta cuenta posee otras cuentas asociadas."
        errors.status = 403
        break;
    }
    return errors
  }

  if(recive_credit){
    const errors = {...await movementQuantityValidation(id_account)}
    return errors
  }
  if(!recive_credit){
    const errors = {...await minorAccountValidaton(code)}
    return errors
  }
}

export default deleteTypeAccountValidation