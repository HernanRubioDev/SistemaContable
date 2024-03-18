import { setRegister } from "@/services/userServices";
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

  const registerUser = async (user) =>{
    setRegisterLoading(true)
    try {
      const res = await setRegister(user);
      switch (true) {
        case  res.status === 201:
          console.log(201);
          break;

        case res.status === 400:
          console.log(400);
          setRegisterErrors(res.validations)
          break

        case res.status === 409:
          console.log(409);
          setRegisterErrors(res.validations)
          break

        case res.status === 500:
          console.log(500);
          break

        default:
          console.log("El service retorno null")
          break;
      }
    } catch (error) {
      console.log(error)
    }finally{
      setRegisterLoading(false)
    }
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