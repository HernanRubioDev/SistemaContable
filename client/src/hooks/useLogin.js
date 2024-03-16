import isEmpty from "@/utils/isEmpty";
import loginValidator from "@/validations/loginValidator";
import { useState } from "react"

const useLogin = ()=>{
  const initialUser = {
    email:'',
    password:''
  }

  const [user, setUser] = useState(initialUser);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});

  const loginUser = ()=>{
    console.log("enviado")

  }

  const handleChange = (e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const errors = loginValidator(user);
    setLoginErrors(errors);
    if(isEmpty(errors)) loginUser(user)
  }

  return {user, loginErrors, loginLoading, handleChange, handleSubmit}
}

export default useLogin;