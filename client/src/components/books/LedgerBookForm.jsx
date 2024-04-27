import LedgerBookTable from "./LedgerBookTable";
import { useEffect } from "react";
import useLedgerBook from "@/hooks/books/useLedgerBook";
import InfoToast from "../InfoToast";
import InfoModal from "../InfoModal";
import Loader from "../Loader";

const LedgerBookForm = ()=>{
  const {accounts, loading, response, accountForm, movements, handleChange, handleSubmit, getAccounts} = useLedgerBook()
  useEffect(()=>{
    getAccounts()
  },[])

  return(
    <>
      <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-md- h-100">
        <div className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2 overflow-hidden">
          <div className="w-100">
            <h3 className="text-secondary fw-bold text-body-tertiary fs-5 m-0">Libro Mayor</h3>
          </div>
          <form onSubmit={(e)=>handleSubmit(e, accountForm)} className="d-flex flex-wrap gap-2">
              <div className="d-flex flex-grow-1 flex-column">
                <label htmlFor="account" className="form-label text-secondary fw-semibold m-0">Cuenta</label>
                <select onChange={(e)=>handleChange(e)} className="form-select" id="account" aria-label="Default select example" name="name" value={accountForm.name}>
                  <option value="" disabled >Seleccione una cuenta</option>
                  {accounts.map(acc => <option key={acc.id_account} value={acc.name}>{acc.name}</option>)}
                </select>
              </div>
              <div className="d-flex flex-grow-1 flex-column">
                <label htmlFor="dateFrom" className="form-label text-secondary fw-semibold m-0">Desde</label>
                <input onChange={(e)=>handleChange(e)} type="date" className="form-control" id="dateFrom" placeholder="Ej: Banco Río" name="date_from" value={accountForm.date_from} max={new Date().toISOString().slice(0, 10)}/>
              </div>
              <div className="d-flex flex-grow-1 flex-column">
                <label htmlFor="dateTo" className="form-label text-secondary fw-semibold m-0">Hasta</label>
                <input onChange={(e)=>handleChange(e)} type="date" className="form-control" id="dateTo" placeholder="Ej: Banco Río" name="date_to" value={accountForm.date_to} max={new Date().toISOString().slice(0, 10)}/>
              </div>
              <div className="w-100 d-flex justify-content-end">
                <button type="submit" className="btn btn-sm btn-primary align-self-end d-flex justify-content-center col-12 col-lg-2 mt-2"><span className="material-symbols-outlined me-1">search</span>Buscar</button>
              </div>
          </form>
          {loading ? <div className="d-flex justify-copntent-center"><Loader /></div> : <LedgerBookTable movements={movements}/>}
        </div>
      </div>
      <InfoToast content={response}/>
      <InfoModal content={response}/>
    </>
  );
}

export default LedgerBookForm;