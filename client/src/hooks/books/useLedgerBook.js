import { default as SessionContext } from "@/context/SessionContext";
import { default as useLogout } from "../users/useLogout";
import { useContext, useState } from "react";
import { getAccount } from "@/services/accountService";
import { getMovements } from "@/services/movementService";

const useLedgerBook = ()=>{
  const initialForm = {
    name:"",
    date_from:"",
    date_to:""
  }
  const [accountForm, setAccountForm] = useState(initialForm)
  const [accounts, setAccounts] = useState([])
  const [movements, setMovements] = useState([])
  const [response, setAccountResponse] = useState({});
  const [loading, setLoading] = useState(false)
  const {userSession} = useContext(SessionContext)
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))

  const handleChange = (e)=>{
    setAccountForm({
      ...accountForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e, accountForm)=>{
    e.preventDefault()
    if(accountForm.name === ""){
      setAccountResponse({title:"Error", message:"Debe seleccionar una cuenta.", success:false})
      infoToast.show()
      return
    }
    searchMovement(accountForm)
  }

  const getAccounts = async()=>{
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"))
    const {auth_token} = userSession
    const acc = {name:"", recive_credit:"true", account_type:"", code:"", date_to:"", date_from:""}
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

  const searchMovement = async (accountForm)=>{
    const {account} = accountForm
    setLoading(true)
    const {auth_token} = userSession
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    try {
      const res = await getMovements(accountForm, auth_token, account);
      switch (true) {
        case res.status === 200:
          setMovements(res.movements);
          break;

        case res.status === 404:
          setMovements([])
          setAccountResponse({title:"Error", message:res.message, success:false})
          infoToast.show()
          break;

        case res.status === 401:
          setAccountResponse({title:"Error.", message:res.message+' Será redirigido al login.', status:'danger'})
          infoModal.show()
          setTimeout(()=>{
            infoModal.hide()
            logOutUser()
          },2500)
          break;

        case res.status === 403:
          setAccountResponse({title:"Error", message:res.message, status:'danger'})
          infoModal.show()
          break;
      
        default:
          setMovements([])
          setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally {
      setLoading(false)
    }
  }

  return {accounts, loading, response, accountForm, movements, handleChange, handleSubmit, getAccounts}
}

export default useLedgerBook;