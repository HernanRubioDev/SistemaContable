import { default as SessionContext } from "@/context/SessionContext";
import { useContext } from "react";
import { default as useLogout } from "../users/useLogout";
import { useState } from "react";
import { getMovements } from "@/services/movementService";

const useSearchMovement = ()=>{
  const initialDates = {
    date_from:'',
    date_to:new Date().toISOString().slice(0, 10),
  }
  const [dates, setDates] = useState(initialDates)
  const [loading, setLoading] = useState(false)
  const [movements, setMovements] = useState([])
  const [lines, setLines] = useState([])
  const [response, setResponse] = useState({})
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
  const {logOutUser} = useLogout()
  const {userSession} = useContext(SessionContext)

  const handleChange = (e)=>{
    setDates({
      ...dates,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e, dates)=>{
    e.preventDefault()
    searchMovement(dates)
  }

  const handleReset = ()=>{
    setDates(initialDates)
    setMovements([])
    setLines([])
  }

  const searchMovement = async (dates)=>{
    setLoading(true)
    const {auth_token} = userSession
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    try {
      const res = await getMovements(dates, auth_token);
      switch (true) {
        case res.status === 200:
          setMovements(res.movements);
          break;

        case res.status === 404:
          setMovements([])
          setResponse({title:"Error", message:res.message, success:false})
          infoToast.show()
          break;

        case res.status === 401:
          setResponse({title:"Error.", message:res.message+' Será redirigido al login.', status:'danger'})
          infoModal.show()
          setTimeout(()=>{
            infoModal.hide()
            logOutUser()
          },2500)
          break;

        case res.status === 403:
          setResponse({title:"Error", message:res.message, status:'danger'})
          infoModal.show()
          break;
      
        default:
          setMovements([])
          setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally {
      setLoading(false)
    }
  }

  const searchLines = (id_move)=>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    const move = movements.find(move => move.id_move === id_move)
    setResponse({title: move.description, status:'secondary'})
    setLines(move.lines)
    infoModal.show()
  }

  return {dates, loading, movements, response, lines, handleChange, handleSubmit, handleReset, searchLines}
}

export default useSearchMovement;