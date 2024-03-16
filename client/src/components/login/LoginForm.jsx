import { NavLink } from "react-router-dom";

const LoginForm = ()=>{
  return(
    <div className="col-12 col-lg-9 d-flex h-75 rounded-3 shadow">
      <div className="d-none d-lg-flex flex-column justify-content-center col-6 bg-body-secondary rounded-start-3">
        <h5 className="fs-1 text-light-emphasis text-center fw-bolder">¡Bienvenido!</h5>
        <img className='col-6 align-self-center' src='images/login-background.svg' />
        <p className='text-light-emphasis text-center fw-semibold'>¡Lleva tus finanzas de una manera facil y rápida!</p>
      </div>
      <form className="d-flex flex-column justify-content-center col-12 col-lg-6 px-4 py-5 rounded-end-3 bg-white">
        <h1 className="text-center text-secondary fw-bold fs-2 mb-4">INGRESAR</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-secondary fw-semibold">Email</label>
          <input type="email" className="form-control form-control" id="username" placeholder="Ingrese su email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-secondary fw-semibold">Contraseña</label>
          <input type="password" className="form-control form-control" id="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="mt-3">
          <input type="submit" className="btn btn-sm btn-primary w-100 fw-semibold py-2" value="INGRESAR"/>
          <p className="text-light-emphasis text-end mt-1">¿Aún no tienes cuenta? <NavLink to='/register' className='text-decoration-none'>¡Regístrate!</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;