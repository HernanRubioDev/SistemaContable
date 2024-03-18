import { setLogin } from "@/services/userServices";
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

  const loginUser = async()=>{
    setLoginLoading(true)
    try {
      const res = await setLogin(user)
      console.log(res)
      switch (true) {
        case res.status === 201:
          console.log("201")
          break;

        case res.status === 403:
          setLoginErrors(res.validations)
          break

        case res.status === 400:
          break;

        case res.status === 404:
          setLoginErrors(res.validations)
          break;

        case res.status === 500:
          console.log(500)
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error)
    }finally{
      setLoginLoading(false)
    }
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