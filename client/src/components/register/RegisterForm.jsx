import { NavLink } from "react-router-dom";

const RegisterForm = ()=>{
  return(
    <div className="col-12 col-lg-9 d-flex rounded-3 shadow">
      <div className="d-none d-lg-flex flex-column justify-content-center col-6 bg-body-secondary rounded-start-3">
        <h1 className="text-center text-light-emphasis fw-bold fs-1">¡Regístrate!</h1>
        <img className='col-6 align-self-center' src='images/login-background.svg' />
        <p className='text-light-emphasis text-center fw-semibold'>¡Lleva tus finanzas de una manera facil y rápida!</p>
      </div>
      <form className="d-flex flex-column justify-content-center col-12 col-lg-6 px-4 py-4 rounded-end-3 bg-white">
        <div className="d-flex">
          <div className="mb-3 w-100 pe-1">
            <label htmlFor="name" className="form-label text-secondary fw-semibold">Nombre</label>
            <input type="text" className="form-control form-control" id="name" placeholder="Ingrese su nombre" />
          </div>
          <div className="mb-3 w-100 ps-1">
            <label htmlFor="last_name" className="form-label text-secondary fw-semibold">Apellido</label>
            <input type="text" className="form-control form-control" id="last_name" placeholder="Ingrese su apellido" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-secondary fw-semibold">Email</label>
          <input type="email" className="form-control form-control" id="username" placeholder="Ingrese su email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-secondary fw-semibold">Contraseña</label>
          <input type="password" className="form-control form-control" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="mb-3">
          <label htmlFor="re_password" className="form-label text-secondary fw-semibold">Repite tu contraseña</label>
          <input type="password" className="form-control form-control" id="re_password" placeholder="Repita su contraseña" />
        </div>
        <div className="mt-3">
          <input type="submit" className="btn btn-sm btn-primary w-100 fw-semibold py-2" value="REGISTRARSE"/>
          <p className="text-light-emphasis text-end mt-1">¿Ya tienes cuenta? <NavLink to='/' className='text-decoration-none'>¡Ingresa!</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;