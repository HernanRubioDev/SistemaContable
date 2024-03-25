import { setAccount } from "@/services/accountService";
import isEmpty from "@/utils/isEmpty";
import accountValidator from "@/validations/accountValidator";
import { useState } from "react";

const useAccount = ()=>{
  const initialAccount = {
    name:'',
    recive_credit:'false',
    account_type:'A',
    code:''
  }
  const [account, setNewAccount] = useState(initialAccount)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const createAccount = async()=>{
    setLoading(true)
    try {
      const res = await setAccount();
    
    } catch (error) {
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
    console.log(errors)
    isEmpty(errors) ? createAccount() : setErrors(errors)
  }

  const handleReset = ()=>{
    setNewAccount(initialAccount);
  }

  return {account, setNewAccount, handleChange, handleSubmit, handleReset}
}
export default useAccount;