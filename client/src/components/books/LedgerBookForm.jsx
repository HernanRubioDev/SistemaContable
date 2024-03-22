import LedgerBookTable from "./LedgerBookTable";

const LedgerBookForm = ()=>{
  return(
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <div className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2 overflow-hidden">
        <form className="d-flex flex-wrap gap-3">
          <div className="w-100">
            <h3 className="text-secondary fw-bold text-body-tertiary fs-5 m-0">Libro Mayor</h3>
          </div>
          <div className="col-12 col-lg-2">
            <label htmlFor="movementFrom" className="form-label text-secondary fw-semibold m-0">Desde</label>
            <input type="date" className={`form-control`} id="movementFrom" placeholder="Ej: Banco Río" name="movement-from"/>
          </div>
          <div className="col-12 col-lg-2">
            <label htmlFor="movementTo" className="form-label text-secondary fw-semibold m-0">Hasta</label>
            <input type="date" className={`form-control`} id="movementTo" placeholder="Ej: Banco Río" name="movement-to"/>
          </div>
            <button type="submit" className="btn btn-primary align-self-end d-flex justify-content-center col-12 col-md-2"><span className="material-symbols-outlined me-1">search</span>Buscar</button>
            <button type="submit" className="btn btn-secondary align-self-end d-flex justify-content-center col-12 col-md-2"><span className="material-symbols-outlined me-1">ink_eraser</span>Limpiar</button>
        </form>
        <LedgerBookTable />
      </div>
    </div>
  );
}

export default LedgerBookForm;