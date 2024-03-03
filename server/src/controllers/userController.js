import {setUser} from '../models/userModel.js';

const registerUser = async (req, res)=>{
  const user = req.body;
  try {
    const result = await setUser(user);
    switch (true) {
      case result.rowCount !== 0:
        res.status(201).json({message:"El usuario fue creado correctamente.", data: result.rows[0]})
        break;
    
      default:
        res.status(500).json({message:"Se a producido un error inesperado. Inténtelo más tarde."})
        break;
    }
  } catch (error) {
    res.status(500).json({message:"Se a producido un error inesperado. Inténtelo más tarde."})
  }
}

export {registerUser};