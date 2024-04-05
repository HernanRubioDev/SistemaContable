const setMovement = async (movement)=>{
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

export {setMovement}