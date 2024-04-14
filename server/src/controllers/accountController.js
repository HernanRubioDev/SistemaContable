import { dropAccount, getAccount, setAccount } from "../models/accountModel.js";

const createAccount = async(req, res)=>{
  const account = req.body
  const {id_user} = req.user
  try {
    const response = await setAccount(account, id_user);
    switch (true) {
      case response.rowCount !== 0:
        res.status(201).json({status: 201, message: `La cuenta ${account.name} se creó correctamente.`});
        break;
    
      default:
        res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;
    }
  } catch (error) {
    res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

const deleteAccount = async(req, res)=>{
  const account = req.body
  try {
    const response = await dropAccount(account)
    switch (true) {
      case response.rowCount !== 0:
        res.status(201).json({status: 200, message: `La cuenta ${account.name} fue eliminada.`});
        break;
    
      default:
        res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;
    }
  } catch (error) {
    res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

const searchAccount = async (req, res)=>{
  const account = req.query
  try {
    const accounts = await getAccount(account);
    switch (true) {
      case accounts.rowCount !== 0:
        res.status(200).json({status:200, accounts: accounts.rows})
        break;

      case accounts.rowCount === 0:
        res.status(404).json({status:404, message: "No se han encontrando cuentas con esos datos."})
        break;
    
      default:
        res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;
    }
  } catch (error) {
    res.status(500).json({status:500, message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

export {createAccount, searchAccount, deleteAccount};