
const AddAccountForm = ()=>{
  return(
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <form className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-5">
        <div className="w-100">
          <h3 className="text-secondary fw-bold text-body-tertiary fs-5">Registrar cuenta</h3>
        </div>
        <div className="d-flex flex-grow-1 gap-3 flex-wrap">
          <div className="flex-grow-1">
            <label htmlFor="accountName" className="form-label text-secondary fw-semibold m-0">Nombre</label>
            <input type="text" className={`form-control`} id="accountName" placeholder="Ej: Banco Río" name="name"/>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="account_type" className="form-label text-secondary fw-semibold m-0">Tipo</label>
            <select className="form-select" id="account_type" aria-label="Default select example">
              <option value="1">Activo</option>
              <option value="2">Pasivo</option>
              <option value="3">Resultado positivo</option>
              <option value="3">Resultado negativo</option>
            </select>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            <label className="form-label text-secondary fw-semibold m-0">Recibe crédito</label>
            <div className="d-flex align-items-center j gap-3 border h-100 rounded-1">
              <div className="d-flex ms-2">
                <input className="form-check-input" type="radio" id="reciveCreditTrue" name="recive_credit"/>
                <label className="form-check-label ms-1" htmlFor="reciveCreditTrue">Sí </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" id="reciveCreditFalse" name="recive_credit" checked/>
                <label className="form-check-label ms-1" htmlFor="reciveCreditFalse">No </label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="w-50">
          <label htmlFor="major_account" className="form-label text-secondary fw-semibold m-0">Tipo</label>
            <select className="form-select" id="major_account" aria-label="Default select example">
              <option value="1">Banco Rio</option>
              <option value="1">Banco Nacion</option>
            </select>
          </div>
          <div className="w-50">
            <label htmlFor="code" className="form-label text-secondary fw-semibold m-0">Código</label>
            <input type="text" className={`form-control`} id="code" placeholder="Aquí aparecera el código de la cuenta" name="code" disabled/>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-lg-end gap-2">
          <button type="submit" className="btn btn-secondary col-12 col-lg-2 d-flex justify-content-center align-items-center"><span className="material-symbols-outlined me-2">ink_eraser</span>Limpiar</button>
          <button type="submit" className="btn btn-primary col-12 col-lg-2 d-flex justify-content-center align-items-center"><span className="material-symbols-outlined me-2">save</span>Agregar</button>
        </div>
      </form>
    </div>
  );
}

export default AddAccountForm