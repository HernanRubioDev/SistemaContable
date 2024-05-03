const API = import.meta.env.VITE_API;

const setLogin = async(user)=>{
  const LOGIN_ENDPOINT = `${API}/users/login`
  
  const options = {
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(user),
  }

  try {
    const res = await fetch(LOGIN_ENDPOINT, options).then(res => res.json());
    return res
  } catch (error) {
    return null;
  }
}

const setRegister = async(user) =>{
  const REGISTER_ENDPOINT = `${API}/users/register`
  const options = {
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(user),
  }
  try {
    const res = await fetch(REGISTER_ENDPOINT, options).then(res => res.json());
    return res
  } catch (error) {
    return null
  }
}


export {setLogin, setRegister}