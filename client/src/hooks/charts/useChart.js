import { useContext, useState} from "react";
import SessionContext from "@/context/SessionContext";
import useLogout from "../users/useLogout";
import { getAccount } from "@/services/accountService";
import { useEffect } from "react";

const useChart = ()=>{
  const intialForm = {
    positiveResult:"",
    negativeResult:""
  }
  const [accountsForm, setAccountForm] = useState(intialForm)
  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({})
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
  const {logOutUser} = useLogout()
  const {userSession} = useContext(SessionContext)

  useEffect(()=>{
    if(accounts.length === 0) getAccounts()
    if(accountsForm.positiveResult && accountsForm.negativeResult){
      console.log("entro")
    }
  },[accountsForm])


  const handleChange = (e)=>{
    setAccountForm({
      ...accountsForm,
      [e.target.name]: e.target.value
    })
  }

  const getAccounts = async()=>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    const {auth_token} = userSession
    const acc = {account_type:'', name:'', recive_credit:'true', date_to:'', date_from:''}
    try {
      const res = await getAccount(acc, auth_token)
      switch (true) {
        case res.status === 200:
          setAccounts(res.accounts)
          break;

        case res.status === 404:
          setAccounts([])
          setResponse({title:"Error", message:'No se han encontrado cuentas.', success:false})
          infoToast.show()
          break;

        case res.status === 401:
          setResponse({title:"Error.", message:res.message+' Será redirigido al login.', status:'danger'})
          infoModal.show()
          setTimeout(()=>{
            infoModal.hide()
            logOutUser()
          },2500)
          break;
      
        case res.status === 403:
          setResponse({title:"Error", message:res.message, status:"danger"})
          infoModal.show()
          break;
          
        default:
          setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    }
  }

  return {loading, accounts, response, accountsForm, handleChange, getAccounts}
}

export default useChart