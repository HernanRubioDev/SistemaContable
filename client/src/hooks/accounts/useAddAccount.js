import { setAccount } from "@/services/accountService";
import isEmpty from "@/utils/isEmpty";
import accountValidator from "@/validations/accountValidator";
import { useState } from "react";

const useAddAccount = ()=>{
  const initialAccount = {
    name:'',
    recive_credit:'false',
    account_type:'A',
    code:''
  }
  const [account, setNewAccount] = useState(initialAccount)
  const [loading, setLoading] = useState(false)
  const [accountResponse, setAccountResponse] = useState({});
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))

  const createAccount = async()=>{
    setLoading(true)
    try {
      const res = await setAccount();
      switch (true) {
        case res.status === 201:
          console.log(201)
          break;

        case res.status === 400:
          console.log(400)
          break;

        case res.status === 403:
          console.log(403)
          break;
      
        default:
          setAccountResponse({title:"Error", meesage:"Se ha producido un error. Inténtelo más tarde.", success:false})
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

  return {account, loading, accountResponse, setNewAccount, handleChange, handleSubmit, handleReset}
}
export default useAddAccount;