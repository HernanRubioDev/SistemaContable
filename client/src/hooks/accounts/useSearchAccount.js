import { getAccount } from "@/services/accountService";
import { useState } from "react";

const useSearchAccount = ()=>{
  const initialAccount = {
    name:'',
    date_from:'',
    date_to: new Date().toISOString().slice(0, 10),
  }
  const [account, setNewAccount] = useState(initialAccount)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({});
  const [errors, setErrors] = useState({})
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
    console.log("entro")
    setNewAccount(initialAccount);
  }

  const searchAccount = async (account)=>{
    setLoading(true)
    try {
      const res = await getAccount(account);
      switch (true) {
        case res.status === 200:
          setResponse(res.accounts);
          break;

        case res.status === 404:
          setErrors({title:"Error", message:res.message, success:false})
          break;

        case res.status === 403:
          setErrors({title:"Error", message:res.message, success:false})
          break;
      
        default:
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