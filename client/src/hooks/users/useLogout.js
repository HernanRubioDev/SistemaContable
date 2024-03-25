import SessionContext from "@/context/SessionContext";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

const useLogout = ()=>{
  const {handleSession} = useContext(SessionContext)
  const navigate = useNavigate();

  const logOutUser = ()=>{
      handleSession(null);
      localStorage.removeItem("user");
      navigate("/")
  }

  return {logOutUser};
}

export default useLogout;