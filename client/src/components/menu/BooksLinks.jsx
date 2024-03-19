import { NavLink } from "react-router-dom";

const BookLinks = ()=>{
  return(
  <div className="accordion border-bottom" id="bookAccordion">
    <div className="accordion-item border-0">
    <h2 className="accordion-header">
      <button className="accordion-button rounded-0 bg-body-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBookAccordion" aria-expanded="false" aria-controls="collapseBookAccordion">
        <span className="fw-bold text-body-tertiary">Libros</span>
      </button>
    </h2>
    </div>
    <div id="collapseBookAccordion" className="accordion-collapse collapse" data-bs-parent="#bookAccordion">
      <div className="accordion-body p-0 border-top">
        <NavLink className='accordion-link py-2 text-secondary fw-semibold'><span className="ms-4 ps-2">Mayor</span></NavLink>
        <NavLink className='accordion-link py-2 text-secondary fw-semibold'><span className="ms-4 ps-2">Diario</span></NavLink>
      </div>
    </div>
  </div>
  )
}
export default BookLinks;