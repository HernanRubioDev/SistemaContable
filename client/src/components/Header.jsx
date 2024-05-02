import { NavLink } from "react-router-dom"
import '@/stylesheets/Header.css'
import OpenMenuBtn from "./OpenMenuBtn"
import useLogout from "@/hooks/users/useLogout"
import { useContext } from "react"
import SessionContext from "@/context/SessionContext"
const Header = ()=>{
const {logOutUser} = useLogout()
const {userSession} = useContext(SessionContext)
const{name} = userSession
return(
  <nav className="header navbar navbar-expand-lg bg-body-tertiary border-bottom col-12">
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <OpenMenuBtn />
        <NavLink className="navbar-brand" to="/dashboard"><em className="text-black ms-2 fw-semibold">CON<span className="brand-letter">T</span>AC</em></NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <NavLink className="navbar-brand" to="/dashboard"><em className="text-black ms-2 fw-semibold" data-bs-dismiss="offcanvas" aria-label="Close">CON<span className="brand-letter">T</span>AC</em></NavLink>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column flex-lg-row">
          <ul className="navbar-nav justify-content-lg-start flex-grow-1 pe-3 text-center">
          </ul>
          <div className="dropdown">
            <button className="btn bg-transparent border-0 dropdown-toggle d-none d-lg-block fw-semibold text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {name}
            </button>
            <ul className="dropdown-menu header-menu">
              <li><button className="dropdown-option dropdown-item d-flex align-items-center text-secondary"><span className="material-symbols-outlined me-2">settings</span>Configuración
              </button>
              </li>
              <li>
                <button onClick={()=>logOutUser()} className="dropdown-option dropdown-item d-flex align-items-center text-secondary">
                  <span className="material-symbols-outlined me-2">move_item</span>Salir
                </button>
              </li>
            </ul>
            <ul className="d-flex d-lg-none p-0">
              <li className="w-100 text-center list-group-item">
                <button onClick={()=>logOutUser()} className="dropdown-item fw-semibold d-flex align-items-center justify-content-center text-secondary"><span className="material-symbols-outlined me-1">move_item</span>Salir</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
}
export default Header