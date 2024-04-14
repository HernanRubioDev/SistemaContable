import useSearchAccount from "@/hooks/accounts/useSearchAccount";
import AccountTable from "./AccountTable";
import InfoToast from "../InfoToast";
import Loader from "../Loader";
import InfoModal from "../InfoModal";
import '@/stylesheets/SearchAccountForm.css'
const SearchAccountForm = ()=>{
  const {accountForm, loading, response, accounts, accountToDelete, handleChange, handleSubmit, handleDelete} = useSearchAccount()
  return(
    <>
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <div className="search-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow mt-2">
        <div className="w-100">
          <h3 className="text-secondary fw-bold text-body-tertiary fs-5">Buscar cuenta</h3>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} className="d-flex flex-wrap">
        <div className="d-flex flex-grow-1 gap-3">
          <div className="flex-grow-1">
            <label htmlFor="accountName" className="form-label text-secondary fw-semibold m-0">Nombre</label>
            <input onChange={(e)=>handleChange(e)} type="text" className="form-control" id="accountName" placeholder="Ej: Banco Río" name="name" value={accountForm.name} autoFocus/>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="dateFrom" className="form-label text-secondary fw-semibold m-0">Desde</label>
            <input onChange={(e)=>handleChange(e)} type="date" className="form-control" id="dateFrom" placeholder="Ej: Banco Río" name="date_from" value={accountForm.date_from} max={new Date().toISOString().slice(0, 10)}/>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="dateTo" className="form-label text-secondary fw-semibold m-0">Hasta</label>
            <input onChange={(e)=>handleChange(e)} type="date" className="form-control" id="dateTo" placeholder="Ej: Banco Río" name="date_to" value={accountForm.date_to} max={new Date().toISOString().slice(0, 10)}/>
          </div>
        </div>
        <div className="d-flex w-100 justify-content-end mt-2 gap-2">
          <button type="submit" className="btn btn-sm btn-primary col-12 col-lg-2 d-flex justify-content-center align-items-center"><span className="material-symbols-outlined me-1">search</span>Buscar</button>
        </div>
        </form>
        { loading ? <div className="d-flex flex-grow-1 justify-content-center"> <Loader /> </div> : <AccountTable accounts={accounts} handleDelete={handleDelete} /> }
      </div>
    </div>
    <InfoToast content={response}/>
    <InfoModal content={response}/>
    </>
  );
}
export default SearchAccountForm