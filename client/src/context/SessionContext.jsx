import {createContext, useState}  from "react";

const SessionContext = createContext();

const SessionProvider = ({children})=>{
const initialSession = JSON.parse(localStorage.getItem("user")) || null
const [userSession, setUserSession] = useState(initialSession)

const handleSession = (user)=>{
  setUserSession(user)
}

const data = {userSession, handleSession}

return(
  <SessionContext.Provider value={data}>{children}</SessionContext.Provider>
)
}

export {SessionProvider}
export default SessionContext