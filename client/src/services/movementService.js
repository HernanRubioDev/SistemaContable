const setNewMovement = async (movement, auth_token)=>{
  const API_URL = `http://localhost:3000/movements/${auth_token}`
  const options = {
    method: 'POST',
    headers:{
      "content-type":"application/json"
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

const getMovementByDates = async(dates, auth_token)=>{
  const {date_from, date_to} = dates
  const API_URL = `http://localhost:3000/movements/${auth_token}/?date_from=${date_from}&date_to=${date_to}`
  const options = {
    method: 'GET',
    headers:{
      "content-type":"application/json"
    }
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    return res
  } catch (error) {
    return null
  }
}

export {setNewMovement, getMovementByDates}