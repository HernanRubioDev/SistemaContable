const SearchAccountForm = ()=>{
  return(
    <div className="bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow mt-2 gap-3">
      <div className="w-100">
        <h3 className="text-secondary fw-bold text-body-tertiary fs-5">Buscar cuenta</h3>
      </div>
      <form className="d-flex flex-wrap">
      <div className="d-flex flex-grow-1 gap-3">
        <div className="flex-grow-1">
          <label htmlFor="accountName" className="form-label text-secondary fw-semibold">Nombre</label>
          <input type="text" className="form-control" id="accountName" placeholder="Ej: Banco Río" name="name"/>
        </div>
        <div className="flex-grow-1">
          <label htmlFor="dateFrom" className="form-label text-secondary fw-semibold">Desde</label>
          <input type="date" className="form-control" id="dateFrom" placeholder="Ej: Banco Río" name="dateFrom"/>
        </div>
        <div className="flex-grow-1">
          <label htmlFor="dateTo" className="form-label text-secondary fw-semibold">Hasta</label>
          <input type="date" className="form-control" id="dateTo" placeholder="Ej: Banco Río" name="dateTo"/>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-end mt-2">
        <button type="submit" className="btn btn-sm btn-primary col-12 col-lg-2 d-flex justify-content-center align-items-center"><span className="material-symbols-outlined me-1">search</span>Buscar</button>
      </div>
      </form>
    </div>
  );
}
export default SearchAccountForm