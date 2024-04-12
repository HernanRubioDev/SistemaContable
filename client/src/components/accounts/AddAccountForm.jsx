import { useEffect } from "react";
import Loader from "../Loader";
import useAddAccount from "@/hooks/accounts/useAddAccount";
import InfoToast from "../InfoToast";
import InfoModal from "../InfoModal";

const AddAccountForm = ()=>{
  const {account, loading, accountResponse, accounts, getAccounts, setNewAccount, handleChange, handleSubmit, handleReset} = useAddAccount()
  
  useEffect(()=>{
    if (account.recive_credit === "false") {
      setNewAccount({ ...account, code: "", });
    }
    else{
      setNewAccount({...account, code: "",})
      getAccounts()
    }
  },[account.account_type, account.recive_credit])

  return(
    <>
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <form onSubmit={(e)=>handleSubmit(e)} className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2">
        <div className="w-100">
          <h3 className="text-secondary fw-bold text-body-tertiary fs-5">Registrar cuenta</h3>
        </div>
        <div className="d-flex flex-grow-1 gap-3 flex-wrap">
          <div className="flex-grow-1">
            <label htmlFor="accountName" className="form-label text-secondary fw-semibold m-0">Nombre</label>
            <input onChange={(e)=>handleChange(e)} type="text" className={`form-control`} id="accountName" placeholder="Ej: Banco Río" name="name" value={account.name}/>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="account_type" className="form-label text-secondary fw-semibold m-0">Tipo</label>
            <select onChange={(e)=>handleChange(e)} className="form-select" id="account_type" aria-label="Default select example" name="account_type" value={account.account_type}>
              <option value="A">Activo</option>
              <option value="P">Pasivo</option>
              <option value="R+">Resultado positivo</option>
              <option value="R-">Resultado negativo</option>
            </select>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            <label className="form-label text-secondary fw-semibold m-0">Recibe crédito</label>
            <div className="d-flex align-items-center j gap-3 border h-100 rounded-1">
              <div className="d-flex ms-2">
                <input onChange={(e)=>handleChange(e)} className="form-check-input" type="radio" id="reciveCreditFalse" name="recive_credit" value={true}/>
                <label className="form-check-label ms-1" htmlFor="reciveCreditFalse">Sí </label>
              </div>
              <div className="d-flex">
                <input onChange={(e)=>handleChange(e)} className="form-check-input" type="radio" id="reciveCreditTrue" name="recive_credit" value={false} defaultChecked/>
                <label className="form-check-label ms-1" htmlFor="reciveCreditTrue">No </label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          {account.recive_credit ?
          <div className="d-flex flex-column flex-grow-1">
          <label htmlFor="major_account" className="form-label text-secondary fw-semibold m-0">Cuenta</label>
            <select onChange={(e)=>handleChange(e)} className="form-select" id="major_account" aria-label="Default select example" name="code" value={account.code} disabled={account.recive_credit==='false' && true}>
              <option value="" disabled>Seleccina una cuenta</option>
              {accounts && accounts.map((acc) => <option value={acc.code} key={acc.id_account}>{acc.name}</option>)}
            </select>
          </div> : ''}
          <div className="d-flex flex-column flex-grow-1">
            <label htmlFor="code" className="form-label text-secondary fw-semibold m-0">Código</label>
            <input onChange={(e)=>handleChange(e)} type="text" className={`form-control`} id="code" placeholder="Aquí aparecera el código de la cuenta" name="account_code" value={account.code} disabled/>
          </div>
        </div>
        {loading ? 
        <div className="d-flex justify-content-center">
          <Loader />
        </div> :
        <div className="d-flex flex-wrap justify-content-lg-end gap-2">
          <button onClick={()=>handleReset()} type="reset" className="btn btn-sm btn-secondary col-12 col-lg-2 d-flex justify-content-center align-items-center"><span className="material-symbols-outlined me-2">ink_eraser</span>Limpiar</button>
          <button type="submit" className="btn btn-sm btn-primary col-12 col-lg-2 d-flex justify-content-center align-items-center"><span className="material-symbols-outlined me-2">save</span>Agregar</button>
        </div>
        }
      </form>
    </div>
    <InfoToast content={accountResponse}/>
    <InfoModal content={accountResponse}/>
    </>
  );
}
export default AddAccountForm