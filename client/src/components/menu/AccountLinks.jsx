import { NavLink } from "react-router-dom";

const AccountLinks = ()=>{
  return(
  <div className="accordion border-bottom" id="accountAccordion">
    <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button className="accordion-button rounded-0 bg-body-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAccountAccordion" aria-expanded="true" aria-controls="collapseAccountAccordion">
        <span className="fw-bold text-body-tertiary d-flex justify-content-center"><span className="material-symbols-outlined me-2">library_books</span>Cuentas</span>
      </button>
    </h2>
    </div>
    <div id="collapseAccountAccordion" className="accordion-collapse collapse" data-bs-parent="#accountAccordion">
      <div className="accordion-body p-0 border-top">
        <NavLink className='accordion-link py-2 text-secondary fw-semibold'><span className="ms-4 ps-2">Agregar</span></NavLink>
        <NavLink className='accordion-link py-2 text-secondary fw-semibold'><span className="ms-4 ps-2">Buscar</span></NavLink>
      </div>
    </div>
  </div>
  )
}
export default AccountLinks;