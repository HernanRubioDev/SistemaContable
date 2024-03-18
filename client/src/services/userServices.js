const setLogin = async(user)=>{
  const API_URL = "http://localhost:3000/users/login"
  
  const options = {
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(user),
  }

  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    return res
  } catch (error) {
    return null;
  }
}

const setRegister = async(user) =>{
  const API_URL = "http://localhost:3000/users/register"
  const options = {
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(user),
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    console.log(res)
    return res
  } catch (error) {
    return null
  }
}


export {setLogin, setRegister}