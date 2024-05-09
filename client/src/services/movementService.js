const API = import.meta.env.VITE_API;

const setNewMovement = async (movement, auth_token)=>{
  const API_URL = `${API}/movements/${auth_token}`
  const options = {
    method: 'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movement)
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json())
    return res
  } catch (error) {
    return null
  }
}

const getMovements = async(data, auth_token)=>{
  const {date_from, date_to, name} = data
  const API_URL = `${API}/movements/${auth_token}/?date_from=${date_from}&date_to=${date_to}&name=${name||""}`
  const options = {
    method: 'GET',
    headers:{
      "Content-Type": "application/json"
    }
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    return res
  } catch (error) {
    return null
  }
}

const getMovementsByAccounts = async(auth_token, accounts) => {
  const {positive_account, negative_account} = accounts
  const API_URL = `${API}/movements/${auth_token}/${positive_account}/${negative_account}`
  const options = {
    method: 'GET',
    headers:{
      "Content-Type": "application/json"
    }
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    return res
  } catch (error) {
    return null
  }
}

export {setNewMovement, getMovements, getMovementsByAccounts}