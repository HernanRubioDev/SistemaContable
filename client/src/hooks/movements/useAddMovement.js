import { useContext, useState} from "react";
import SessionContext from "@/context/SessionContext";
import useLogout from "../users/useLogout";
import { getAccount } from "@/services/accountService";
import { setNewMovement } from "@/services/movementService";

const useAddMovement = ()=>{
  const initialMovement = {
    movement_date: new Date().toISOString().slice(0, 10),
    movement_ammount:'',
    movement_account:'',
    movement_type:'debit',
    movement_description:'',
    lines:[]
  }
  const [movement, setMovement] = useState(initialMovement)
  const [accounts, setAccounts] = useState([])
  const [accountResponse, setAccountResponse] = useState({});
  const [loading, setLoading] = useState(false)
  const infoToast = new bootstrap.Toast(document.getElementById("infoToast"))
  const {logOutUser} = useLogout()
  const {userSession} = useContext(SessionContext)

  const handleChange = (e)=>{
    setMovement({
      ...movement,
      [e.target.name]: e.target.value
    })
  }

  const getAccounts = async()=>{
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    const {auth_token} = userSession
    const acc = {account_type:'', name:'', recive_credit:'true', date_to:'', date_from:''}
    try {
      const res = await getAccount(acc, auth_token)
      switch (true) {
        case res.status === 200:
          setAccounts(res.accounts)
          break;

        case res.status === 404:
          setAccounts([])
          setAccountResponse({title:"Error", message:'No se han encontrado cuentas.', success:false})
          infoToast.show()
          break;

        case res.status === 401:
          setAccountResponse({title:"Error.", message:res.message+' Será redirigido al login.', status:'danger'})
          infoModal.show()
          setTimeout(()=>{
            infoModal.hide()
            logOutUser()
          },2500)
          break;
      
        case res.status === 403:
          setAccountResponse({title:"Error", message:res.message, status:false})
          infoModal.show()
          break;
          
        default:
          setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    }
  }

  const addLine = (movement)=>{
    setMovement({
      ...movement,
      lines: [...movement.lines, {account: movement.movement_account, type: movement.movement_type, ammount: movement.movement_ammount}]
    })
  }

  const removeLine = (lineToRemove)=>{
    setMovement({
      ...movement,
      lines: movement.lines.filter(line => line !== lineToRemove)
    })
  }

  const createMovement = async (movement)=>{
    const {auth_token} = userSession
    const {movement_date, movement_description, lines} = movement
    const newMovement = {movement_date, movement_description, lines}
    try {
      const res = await setNewMovement(newMovement, auth_token)
      switch (true) {
        case res.status === 201:
          setAccountResponse({title:"Asiento creado", message: res.message, success:true})
          setMovement(initialMovement)
          infoToast.show()
          break;

        case res.status === 400:
          setAccountResponse({title:"Error", message: res.message, success:false})
          infoToast.show()
          break;

        case res.status === 403:
          setAccountResponse({title:"Error", message: res.message, success:false})
          infoToast.show()
          break;
      
        default:
          setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
          infoToast.show()
          break;
      }
    } catch (error) {
      setAccountResponse({title:"Error", message:"Se ha producido un error. Inténtelo más tarde.", success:false})
      infoToast.show()
    } finally{
      setLoading(false)
    }
  }

  return {movement, accounts, accountResponse, loading, handleChange, getAccounts, addLine, removeLine, createMovement}
}

export default useAddMovement;