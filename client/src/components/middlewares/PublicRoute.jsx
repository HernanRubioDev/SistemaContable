import SessionContext from "@/context/SessionContext";
import { useContext} from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({component})=>{
  const {userSession} = useContext(SessionContext)

  if(userSession) return <Navigate to='/dashboard' replace/>
  return component
}

export default PublicRoute;