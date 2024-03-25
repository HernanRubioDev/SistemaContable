import { setRegister } from "@/services/userServices";
import isEmpty from "@/utils/isEmpty";
import registerValidator from "@/validations/registerValidator";
import { useState } from "react"
import {useNavigate} from "react-router-dom" ;

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
  const [registerResponse, setRegisterResponse] = useState({})
  const navigate = useNavigate()
  
  const registerUser = async (user) =>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    setRegisterLoading(true)
    try {
      const res = await setRegister(user);
      switch (true) {
        case  res.status === 201:
          setRegisterResponse({title: "¡Bienvenido", message:'Su cuenta ha sido creada con éxito. Será redirigido al Login.', status:'success'})
          infoModal.show()
          setTimeout(()=>{
          infoModal.hide()
          navigate('/')
          },2000)
        break;

        case res.status === 400:
          setRegisterErrors(res.validations)
        break

        case res.status === 409:
          setRegisterErrors(res.validations)
        break

        default:
          setRegisterResponse({title: "Ups...", message:'Parece que ha ocurrindo un error. Inténtelo más tarde.', status:'danger'})
          infoModal.show()
        break;
      }
    } catch (error) {
      setRegisterResponse({title: "Ups...", message:'Parece que ha ocurrindo un error. Inténtelo más tarde.', status:'danger'})
      infoModal.show()
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

  return {user, registerErrors, registerLoading, registerResponse, handleChange, handleSubmit}
}

export default useRegister