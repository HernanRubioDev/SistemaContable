import SessionContext from "@/context/SessionContext";
import { setLogin } from "@/services/userServices";
import isEmpty from "@/utils/isEmpty";
import loginValidator from "@/validations/loginValidator";
import { useContext , useState} from "react";

const useLogin = ()=>{
  const initialUser = {
    email:'',
    password:''
  }
  const [user, setUser] = useState(initialUser);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});
  const [loginResponse, setLoginResponse] = useState({})
  const {handleSession} = useContext(SessionContext)

  const loginUser = async()=>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    setLoginLoading(true)
    try {
      const res = await setLogin(user)
      switch (true) {
        case res.status === 201:
          localStorage.setItem("user", JSON.stringify(res.user))
          handleSession(res.user)
          break;

        case res.status === 403:
          setLoginErrors(res.validations)
          break

        case res.status === 400:
          setLoginResponse({title: "Ups...", message:'Parece que ha ocurrindo un error. Inténtelo más tarde.', status:'danger'})
          break;

        case res.status === 404:
          setLoginErrors(res.validations)
          break;

        default:
        setLoginResponse({title: "Ups...", message:'Parece que ha ocurrindo un error. Inténtelo más tarde.', status:'danger'})
          break;
      }
    } catch (error) {
      setLoginResponse({title: "Ups...", message:'Parece que ha ocurrindo un error. Inténtelo más tarde.', status:'danger'})
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

  return {user, loginErrors, loginLoading, loginResponse, handleChange, handleSubmit}
}

export default useLogin;