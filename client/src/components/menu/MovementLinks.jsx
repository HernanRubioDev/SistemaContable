import { NavLink } from "react-router-dom";

const MovementLinks = ()=>{
  return(
  <div className="accordion border-bottom" id="movementAccordion">
    <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button className="accordion-button rounded-0 bg-body-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMovementAccordion" aria-expanded="false" aria-controls="collapseMovementAccordion">
        <span className="fw-bold text-body-tertiary">Movimientos</span>
      </button>
    </h2>
    </div>
    <div id="collapseMovementAccordion" className="accordion-collapse collapse" data-bs-parent="#movementAccordion">
      <div className="accordion-body p-0 border-top">
        <NavLink className='accordion-link py-2 text-secondary fw-semibold'><span className="ms-4 ps-2">Agregar</span></NavLink>
        <NavLink className='accordion-link py-2 text-secondary fw-semibold'><span className="ms-4 ps-2">Buscar</span></NavLink>
      </div>
    </div>
  </div>
  )
}
export default MovementLinks;