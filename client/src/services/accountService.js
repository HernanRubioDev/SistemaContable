const setAccount = async (account, auth_token)=>{
  const API_URL = `http://localhost:3000/accounts/${auth_token}`
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

const getAccount = async (account, auth_token)=>{
  let {name, date_from, date_to, account_type, recive_credit} = account
  const API_URL = `http://localhost:3000/accounts/${auth_token}/?name=${name}&date_from=${date_from}&date_to=${date_to}&account_type=${encodeURIComponent(account_type)}&recive_credit=${recive_credit}`
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

const deleteAccount = async (account, auth_token)=>{
  const API_URL = `http://localhost:3000/accounts/${auth_token}`
  const options = {
    method: 'DELETE',
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(account)
  }
  try {
    const res = await fetch(API_URL, options).then(res => res.json());
    console.log(res)
    return res
  } catch (error) {
    return null
  }
}

export {setAccount, getAccount, deleteAccount}