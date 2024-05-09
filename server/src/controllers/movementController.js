import { getAmountsSumByAccounts, getMovement, setMovement } from "../models/movementModel.js";

const createMovement = async(req, res)=>{
  const movement = req.body
  try {
    const response = await setMovement(movement);
    switch (true) {
      case response.rowCount !== 0:
        res.status(201).json({status: 201, message: `El asiento se ha creado correctamente.`});
        break;
    
      default:
        res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;
    }
  } catch (error) {
    res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

const searchMovementByDates = async (req, res)=>{
  const dates = req.query
  try {
    const response = await getMovement(dates);
    switch (true) {
      case response.rowCount > 0:
        res.status(200).json({status: 200, movements: response.rows});
        break;

      case response.rowCount === 0:
        res.status(404).json({status: 404, message: "No se han encontrado movimientos con esos datos."});
        break;
    
      default:
        res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;
    }
  } catch (error) {
    res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

const SumAccountsAmount  = async (req, res)=>{
  const {positive_account, negative_account} = req.params
  try {
    const response = await getAmountsSumByAccounts(positive_account, negative_account);
    switch (true) {
      case response.rowCount > 0:
        res.status(200).json({status: 200, movements: response.rows});
        break;

      case response.rowCount === 0:
        res.status(404).json({status: 404, message: "No se han encontrado movimientos asociados."});
        break;
    
      default:
        res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;

    }
  } catch (error) {
    res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

export {createMovement, searchMovementByDates, SumAccountsAmount}