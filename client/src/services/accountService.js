const setAccount = async (account)=>{
  const API_URL = "http://localhost:3000/accounts/add"
  const options = {
    method: 'POST',
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(account)
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    return res
  } catch (error) {
    return null
  }
}

const getAccount = async (account)=>{
  const API_URL = "http://localhost:3000/accounts/add"
  options={
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(account)
  }
  try {
    const res = await fetch(API_URL).then(res => res.json());
    return res
  } catch (error) {
    return null
  }
}

export {setAccount, getAccount}