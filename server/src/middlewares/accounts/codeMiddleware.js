import { getLastMajorAccountByType, getLastMinorAccountByCode } from "../../models/accountModel.js";
import { generateMajorAccountCode, generateMinorAccountCode } from "../../utils/accountCodeGenerator.js";

const codeMiddleware = async (req, res, next)=>{
  const user = req.user;
  const {recive_credit, account_type, code} = req.body
  
  switch (true) {
    case !recive_credit:
      let last_major_code = await getLastMajorAccountByType(account_type)
      const major_account_code = generateMajorAccountCode(last_major_code, account_type);
      req.body.code = major_account_code;
      next()
      break;
  
    case recive_credit:
      const last_minor_code = await getLastMinorAccountByCode(code.slice(0,3), account_type);//ARREGLAR LA CONSULTA YA QUE NO ESTA ANDANDO
      const minor_account_code = generateMinorAccountCode(last_minor_code, code);
      req.body.code = minor_account_code;
      next()
      break;

    default:
      res.status(500).json({message:"Ha ocurrido un error inesperado. Inténtelo más tarde."})
      break;
  }
}

export default codeMiddleware;