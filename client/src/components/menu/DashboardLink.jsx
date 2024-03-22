import { NavLink } from "react-router-dom"
import '@/stylesheets/AccountingMenu.css'

const DashboardLink = ()=>{
  return(
    <NavLink to='/dashboard' className='menu-link border-bottom pt-3 text-secondary fw-semibold'><p className="lh-1 ms-3 ps-1 d-flex align-items-center"><span className="material-symbols-outlined me-2">bar_chart_4_bars</span>Inicio</p></NavLink>
  )
}

export default DashboardLink