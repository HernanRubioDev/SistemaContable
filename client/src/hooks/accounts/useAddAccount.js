import SessionContext from "@/context/SessionContext";
import { getAccount, setAccount} from "@/services/accountService";
import isEmpty from "@/utils/isEmpty";
import accountValidator from "@/validations/accountValidator";
import { useContext, useState } from "react";

const useAddAccount = ()=>{
  const initialAccount = {
    name:"",
    recive_credit:"false",
    account_type:"A",
    code:"",
  }
  const [account, setNewAccount] = useState(initialAccount)
  const [loading, setLoading] = useState(false)
  const [accountResponse, setAccountResponse] = useState({});
  const [accounts, setAccounts] = useState([])
  const {userSession} = useContext(SessionContext)
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))

  const createAccount = async()=>{
    const {auth_token} = userSession
    setLoading(true)
    try {
      const res = await setAccount(account, auth_token);
      switch (true) {
        case res.status === 201:
          setAccountResponse({title:"Cuenta creada", message: res.message, success:true})
          infoToast.show()
          break;

        case res.status === 400:
          setAccountResponse({title:"Error", message: res.message, success:false})
          infoToast.show()
          break;

        case res.status === 403:
          setAccountResponse({title:"Error", message: res.message, success:false})
          infoToast.show()
          break;
      
        default:
          setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally{
      setLoading(false)
    }
  }

  const getAccounts = async()=>{
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"))
    const {auth_token} = userSession
    const acc = {...account, name:"", recive_credit:"false", date_to:"", date_from:""}
    try {
      const res = await getAccount(acc, auth_token)
      switch (true) {
        case res.status === 200:
          setAccounts(res.accounts)
          break;

        case res.status === 404:
          setAccounts([])
          setAccountResponse({title:"Error", message:"No se han encontrado cuentas.", success:false})
          infoToast.show()
          break;

        case res.status === 401:
          setAccountResponse({title:"Error.", message:res.message+" Será redirigido al login.", status:"danger"})
          infoModal.show()
          setTimeout(()=>{
            infoModal.hide()
            logOutUser()
          },2500)
          break;
      
        case res.status === 403:
          setAccountResponse({title:"Error", message:res.message, status:false})
          infoModal.show()
          break;
          
        default:
          setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    }
  }

  const handleChange = (e)=>{
    setNewAccount({
      ...account,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const errors = accountValidator(account);
    if(isEmpty(errors)){
      createAccount()
    }
    else{
      setAccountResponse({title:"Error", message: errors.message, success: false})
      infoToast.show()
    }
  }

  const handleReset = ()=>{
    setNewAccount(initialAccount);
  }

  return {account, loading, accountResponse, accounts, getAccounts, setNewAccount, handleChange, handleSubmit, handleReset}
}
export default useAddAccount;