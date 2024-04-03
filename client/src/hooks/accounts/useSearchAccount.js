import SessionContext from "@/context/SessionContext";
import { getAccount } from "@/services/accountService";
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
  const [account, setNewAccount] = useState(initialAccount)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState([]);
  const [errors, setErrors] = useState({})
  const {logOutUser} = useLogout()
  const {userSession} = useContext(SessionContext)
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))

  const handleChange = (e)=>{
    setNewAccount({
      ...account,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    searchAccount(account)
  }

  const handleReset = ()=>{
    setNewAccount(initialAccount);
  }

  const searchAccount = async (account)=>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    setLoading(true)
    const {auth_token} = userSession
    try {
      const res = await getAccount(account, auth_token);
      switch (true) {
        case res.status === 200:
          setResponse(res.accounts);
          break;

        case res.status === 404:
          setResponse([])
          setErrors({title:"Error", message:res.message, success:false})
          infoToast.show()
          break;

        case res.status === 401:
          setErrors({title:"Error.", message:res.message+' Será redirigido al login.', status:'danger'})
          infoModal.show()
          setTimeout(()=>{
            infoModal.hide()
            logOutUser()
          },2500)
          break;

        case res.status === 403:
          setErrors({title:"Error", message:res.message, status:'danger'})
          infoModal.show()
          break;
      
        default:
          setResponse([])
          setErrors({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setErrors({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally {
      setLoading(false)
    }
  }

  return {account, loading, errors, response, handleChange, handleSubmit, handleReset}
}

export default useSearchAccount