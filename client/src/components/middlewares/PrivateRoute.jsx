import SessionContext from "@/context/SessionContext";
import { useContext} from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({component})=>{
  const {userSession} = useContext(SessionContext)

  if(!userSession) return <Navigate to='/' replace/>
  return component
}

export default PrivateRoute;