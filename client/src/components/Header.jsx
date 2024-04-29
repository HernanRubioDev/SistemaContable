import { NavLink } from "react-router-dom"
import '@/stylesheets/Header.css'
import OpenMenuBtn from "./OpenMenuBtn"
import useLogout from "@/hooks/users/useLogout"
const Header = ()=>{
const {logOutUser} = useLogout()

return(
  <nav className="header navbar navbar-expand-lg bg-body-tertiary border-bottom col-12">
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <OpenMenuBtn />
        <NavLink className="navbar-brand"><em className="text-black ms-2 fw-semibold">CONTAC</em></NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <NavLink className="navbar-brand"><em className="text-black ms-2 fw-semibold">CONTAC</em></NavLink>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column flex-lg-row">
          <ul className="navbar-nav justify-content-lg-start flex-grow-1 pe-3 text-center">
          </ul>
          <ul className=" navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
            <li className="nav-item">
              <button onClick={()=>logOutUser()} type="button" className='nav-link fw-semibold text-secondary w-100'>Salir</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)
}
export default Header