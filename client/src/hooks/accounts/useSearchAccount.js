import SessionContext from "@/context/SessionContext";
import { deleteAccount, getAccount } from "@/services/accountService";
import { useContext, useState} from "react";
import useLogout from "../users/useLogout";

const useSearchAccount = ()=>{
  const initialAccount = {
    name:'',
    date_from:'',
    date_to: new Date().toISOString().slice(0, 10),
    account_type:'',
    recive_credit:''
  }
  const [accountForm, setNewAccount] = useState(initialAccount)
  const [accountToDelete, setAccountToDelete] = useState([]);
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const {logOutUser} = useLogout()
  const {userSession} = useContext(SessionContext)
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))

  const handleChange = (e)=>{
    setNewAccount({
      ...accountForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    searchAccount(accountForm)
  }

  const handleReset = ()=>{
    setNewAccount(initialAccount);
  }

  const handleDelete = async (account)=>{
    setResponse({title:"Advertencia", message:`¿Esta seguro de que desea eliminar la cuenta '${account.name}'?`, status:'danger', btnTitle:'Eliminar', action: removeAccount, params: account})
    const infoModal = await new bootstrap.Modal(document.getElementById('infoModal'))
    infoModal.show()
  }

  const searchAccount = async (accountForm)=>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    setLoading(true)
    const {auth_token} = userSession
    try {
      const res = await getAccount(accountForm, auth_token);
      switch (true) {
        case res.status === 200:
          setAccounts(res.accounts);
          break;

        case res.status === 400:
          setAccounts([])
          setResponse({title:"Error", message:res.message, success:false})
          infoToast.show()
          break;

        case res.status === 404:
          setAccounts([])
          setResponse({title:"Error", message:res.message, success:false})
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
          setResponse({title:"Error", message:res.message, status:'danger'})
          infoModal.show()
          break;
      
        default:
          setAccounts([])
          setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally {
      setLoading(false)
    }
  }

  const removeAccount = async (account)=>{
    const {auth_token} = userSession
    setLoading(true)
    try {
      const res = await deleteAccount(account, auth_token)
      switch (true) {
        case res.status === 200:
          const accountsFilteres = accounts.filter((acc) => acc !== account)
          setAccounts(accountsFilteres)
          setResponse({title:"Eliminada", message:res.message, success: true})
          infoToast.show()
          break;

        case res.status === 400:
          setResponse({title:"Error", message:res.message, success: false})
          infoToast.show()
          break;
  
        case res.status === 404:
          setResponse({title:"Error", message:res.message, success: false})
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
          setResponse({title:"Error", message:res.message, status:'danger'})
          infoModal.show()
          break;
      }
    } catch (error) {
      setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally{
      setLoading(false)
    }
  }

  return {accountForm, loading, response, accounts, accountToDelete, handleChange, handleSubmit, handleReset, handleDelete, removeAccount}
}

export default useSearchAccount