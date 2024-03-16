import isEmpty from "@/utils/isEmpty";
import registerValidator from "@/validations/registerValidator";
import { useState } from "react"

const useRegister = ()=>{

  const initialUser = {
    name:'',
    last_name:'',
    email:'',
    password:'',
    re_password:''
  }

  const [user, setUser] = useState(initialUser);
  const [registerLoading, setRegisterLoading] = useState(false)
  const [registerErrors, setRegisterErrors] = useState({});

  const registerUser = (user) =>{
    console.log("enviado")
  }

  const handleChange = (e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const errors = registerValidator(user);
    setRegisterErrors(errors)
    if(isEmpty(errors)) registerUser(user)
  }

  return {user, registerErrors, registerLoading, handleChange, handleSubmit}
}

export default useRegister