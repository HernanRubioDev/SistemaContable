import useSearchMovement from "@/hooks/movements/useSearchMovement"
import SearchMovementTable from "./SearchMovementTable"
import InfoToast from "../InfoToast";
import InfoModal from "../InfoModal";
import LineTable from "./LinesTable";

const SearchMovementForm = ()=>{
  const {dates, loading, movements, response, lines, handleChange, handleSubmit, handleReset, searchLines} = useSearchMovement();
  return(
    <>
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <div className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2 overflow-hidden">
        <form onSubmit={(e)=>handleSubmit(e, dates)} className="d-flex flex-wrap gap-3">
          <div className="w-100">
            <h3 className="text-secondary fw-bold text-body-tertiary fs-5 m-0">Buscar asiento</h3>
          </div>
          <div className="col-12 col-lg-2">
            <label htmlFor="movementFrom" className="form-label text-secondary fw-semibold m-0">Desde</label>
            <input onChange={(e)=>handleChange(e)} type="date" className={`form-control`} id="movementFrom" placeholder="Ej: Banco Río" name="date_from" value={dates.date_from} autoFocus />
          </div>
          <div className="col-12 col-lg-2">
            <label htmlFor="movementTo" className="form-label text-secondary fw-semibold m-0">Hasta</label>
            <input onChange={(e)=>handleChange(e)} type="date" className={`form-control`} id="movementTo" placeholder="Ej: Banco Río" name="date_to" value={dates.date_to} max={new Date().toISOString().slice(0, 10)}/>
          </div>
            <button type="submit" className="btn btn-sm btn-primary align-self-end d-flex justify-content-center col-12 col-lg-2"><span className="material-symbols-outlined me-1">search</span>Buscar</button>
            <button onClick={()=>handleReset()} type="reset" className="btn btn-sm btn-secondary align-self-end d-flex justify-content-center col-12 col-lg-2"><span className="material-symbols-outlined me-1">ink_eraser</span>Limpiar</button>
        </form>
        <SearchMovementTable movements={movements} searchLines={searchLines}/>
      </div>
    </div>
    <InfoToast content={response} />
    <InfoModal content={response}>
      {lines.length !== 0 && <LineTable lines={lines} />}
    </InfoModal>
    </>
  )
}
export default SearchMovementForm