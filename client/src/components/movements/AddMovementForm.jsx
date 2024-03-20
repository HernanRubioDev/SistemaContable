import '@/stylesheets/AddMovementForm.css';
import AddMovementTable from './AddMovementTable';

const AddMovementForm = ()=>{
  return(
    <form className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2">
      <div className="w-100">
        <h3 className="text-secondary fw-bold text-body-tertiary fs-5 m-0">Registrar asiento</h3>
      </div>
      <div className="d-flex flex-wrap column-gap-3">
        <div className="flex-grow-1">
          <label htmlFor="movementDate" className="form-label text-secondary fw-semibold m-0">Fecha</label>
          <input type="date" className={`form-control`} id="movementDate" placeholder="Ej: Banco Río" name="movement_date"/>
        </div>
        <div className="flex-grow-1">
          <label htmlFor="movementAmmount" className="form-label text-secondary fw-semibold m-0">Monto</label>
          <input type="date" className={`form-control`} id="movementAmmount" placeholder="Ej: Banco Río" name="movement_ammount"/>
        </div>
        </div>
        <div className="d-flex flex-wrap column-gap-3">
          <div className="flex-grow-1">
            <label htmlFor="movementAccount" className="form-label text-secondary fw-semibold m-0">Cuenta</label>
            <select className="form-select" id="movementAccount" aria-label="Default select example" name="movement_account">
              <option value="1">Banco Río</option>
            </select>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            <label className="form-label text-secondary fw-semibold m-0">Tipo</label>
            <div className="d-flex align-items-center border h-100 rounded-1">
              <div className="d-flex flex-grow-1 justify-content-center">
                <input className="form-check-input" type="radio" id="debtMovement" name="movement_type"/>
                <label className="form-check-label" htmlFor="debtMovement">Debe</label>
              </div>
              <div className="d-flex flex-grow-1">
                <input className="form-check-input" type="radio" id="creditMovement" name="movement_type" checked/>
                <label className="form-check-label" htmlFor="creditMovement">Haber</label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-grow-1">
          <label htmlFor="movementDescription" className="form-label text-secondary fw-semibold m-0">Descripción</label>
          <textarea className="form-control movement-textarea" placeholder="Leave a comment here" id="movementDescription" name="movement_description"/>
        </div>
        <div className='d-flex flex-wrap column-gap-3 row-gap-2'>
          <button className='btn btn-sm btn-secondary d-flex flex-grow-1 justify-content-center'><span className="material-symbols-outlined me-1">add</span>Agregar</button>
          <button className='btn btn-sm btn-success d-flex flex-grow-1 justify-content-center'><span className="material-symbols-outlined me-2">save</span>Registrar</button>
        </div>
        <AddMovementTable />
    </form>
  )
}
export default AddMovementForm;