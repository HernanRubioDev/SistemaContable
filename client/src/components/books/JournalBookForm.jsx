import useJournalBook from "@/hooks/books/useJournalBook";
import JournalBookTable from "./JournalBookTable";
import InfoToast from "../InfoToast";
import Loader from "../Loader";
import InfoModal from "../InfoModal";

const JournalBook = ()=>{

  const {dates, loading, movements, response, handleChange, handleReset, searchJournalBook} = useJournalBook();
  return(
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <div className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2 overflow-hidden">
        <form onSubmit={(e)=>searchJournalBook(e, dates)} className="d-flex flex-wrap gap-3">
          <div className="w-100">
            <h3 className="text-secondary fw-bold text-body-tertiary fs-5 m-0">Libro diario</h3>
          </div>
          <div className="col-12 col-lg-3">
            <label htmlFor="dateFrom" className="form-label text-secondary fw-semibold m-0">Desde</label>
            <input onChange={(e)=>handleChange(e)} type="date" className={`form-control`} id="dateFrom" name="date_from"/>
          </div>
          <div className="col-12 col-lg-3">
            <label htmlFor="dateTo" className="form-label text-secondary fw-semibold m-0">Hasta</label>
            <input onChange={(e)=>handleChange(e)} type="date" className={`form-control`} id="dateTo" name="date_to"/>
          </div>
            <button type="submit" className="btn btn-primary btn-sm align-self-end d-flex justify-content-center col-12 col-lg-2"><span className="material-symbols-outlined me-1">search</span>Buscar</button>
            <button onClick={()=>handleReset()} type="reset" className="btn btn-secondary btn-sm align-self-end d-flex justify-content-center col-12 col-lg-2"><span className="material-symbols-outlined me-1">ink_eraser</span>Limpiar</button>
        </form>
        {loading ? <div className="d-flex flex-grow-1 justify-content-center"><Loader /></div>: <JournalBookTable movements={movements}/>}
      </div>
      <InfoToast content={response}/>
      <InfoModal content={response} />
    </div>
  );
}
export default JournalBook;