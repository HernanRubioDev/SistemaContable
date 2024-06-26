import {deleteUserAuth, setUser, setUserAuth} from '../models/userModel.js';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

const registerUser = async (req, res)=>{
  const user = req.body;
  user.password = await bcrypt.hash(user.password, 12);
  try {
    const result = await setUser(user);
    switch (true) {
      case result.rowCount !== 0:
        res.status(201).json({status: 201, message:"El usuario fue creado correctamente.", data: result.rows[0]})
        break;
    
      default:
        res.status(500).json({status: 500, message:"Se a producido un error inesperado. Inténtelo más tarde."})
        break;
    }
  } catch (error) {
    res.status(500).json({status: 500, message:"Se a producido un error inesperado. Inténtelo más tarde."})
  }
}

const loginUser = async (req, res)=>{
  const {id_user} = req.user
  const user_ip = req.connection.remoteAddress
  try {
    const auth_token = uuidv4();
    const auth_response = await setUserAuth(id_user, auth_token, user_ip);
    switch (true) {
      case auth_response.rowCount !== 0:
        res.status(201).json({status: 201, user: auth_response.rows[0].user})
        break;
    
      default:
        res.status(500).json({status: 500, message:"Se a producido un error inesperado. Inténtelo más tarde."})
        break;
    }
  } catch (error) {
    res.status(500).json({status: 500, message:"Se a producido un error inesperado. Inténtelo más tarde."})
  }
}

const logOutUser = async (req, res)=>{
  const {auth_token} = req.params
  const user_ip = req.connection.remoteAddress
  try {
    const logout_response = await deleteUserAuth(auth_token, user_ip);
    switch (true) {
      case logout_response.rowCount !==0:
        res.status(200).json({status:200, message: "Se cerró sesión correctamente."})
        break;
    
      default:
        res.status(500).json({status: 500, message:"Se a producido un error inesperado. Inténtelo más tarde."})
        break;
    }
  } catch (error) {
    res.status(500).json({status: 500, message:"Se a producido un error inesperado. Inténtelo más tarde."})
  }
}

export {registerUser, loginUser, logOutUser};