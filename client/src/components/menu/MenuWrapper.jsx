import { useEffect } from "react";
import { useState } from "react";
import '@/stylesheets/AccountingMenu.css';
const MenuWrapper = ({children})=>{
  const mediaQuery = window.matchMedia("(max-width: 992px)");
  const [isMediumScreen, setisMediumScreen] = useState(mediaQuery.matches)
  useEffect(() => {
    const handleChange = () => {
      mediaQuery.matches ? setisMediumScreen(true) : setisMediumScreen(false)
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return(
    <div className={`${isMediumScreen ? 'offcanvas offcanvas-start' : 'd-flex w-25 menu-wrapper'} h-100`} id="menu" aria-labelledby="menuLabel">
      <button type="button" className="btn-close d-lg-none position-absolute end-0 mt-2 me-2" data-bs-dismiss="offcanvas" data-bs-target="#menu" aria-label="Close"></button>
      <div className="offcanvas-body p-0">
        {children}
      </div>
    </div>
  )
}
export default MenuWrapper;