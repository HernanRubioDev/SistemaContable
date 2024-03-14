import { setAccount } from "../models/accountModel.js";

const createAccount = async(req, res)=>{
  const account = req.body

  try {
    const response = await setAccount(account);
    switch (true) {
      case response.rowCount !== 0:
        res.status(201).json({message: `La cuenta ${account.name} se creó correctamente.`});
        break;
    
      default:
        res.status(500).json({message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
        break;
    }
  } catch (error) {
    res.status(500).json({message: "Se ha producido un error inesperado. Inténtelo mas tarde."});
  }
}

export default createAccount;