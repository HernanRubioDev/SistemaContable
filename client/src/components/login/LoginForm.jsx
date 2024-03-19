
import { NavLink } from "react-router-dom";
import Loader from "../Loader";
import useLogin from "@/hooks/users/useLogin";

const LoginForm = ()=>{
  const {user, loginErrors, loginLoading, handleChange, handleSubmit} = useLogin()

  return(
    <div className="col-12 col-lg-9 d-flex rounded-3 h-75 shadow">
      <div className="d-none d-lg-flex flex-column justify-content-center col-6 bg-body-secondary rounded-start-3">
        <h5 className="fs-1 text-light-emphasis text-center fw-bolder">¡Bienvenido!</h5>
        <img className='col-6 align-self-center' src='images/login-background.svg' />
        <p className='text-light-emphasis text-center fw-semibold'>¡Lleva tus finanzas de una manera facil y rápida!</p>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)} className="d-flex flex-column justify-content-center col-12 col-lg-6 px-4 py-5 rounded-end-3 bg-white">
        <h1 className="text-center text-secondary fw-bold fs-2 mb-4">INGRESAR</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-secondary fw-semibold">Email</label>
          <input onChange={(e)=>handleChange(e)} type="email" className={`form-control ${loginErrors.email && 'is-invalid'}`} id="username" placeholder="Ingrese su email" name="email" value={user.email}/>
          <p className="text-danger lh-1 my-0">{loginErrors && loginErrors.email}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-secondary fw-semibold">Contraseña</label>
          <input onChange={(e)=>handleChange(e)} type="password" className={`form-control ${loginErrors.password && 'is-invalid'}`} id="password" placeholder="Ingrese su contraseña" name="password" value={user.password}/>
          <p className="text-danger lh-1 my-0">{loginErrors && loginErrors.password}</p>
        </div>
        <div className="mt-3">

          {loginLoading ? 
            <div className="d-flex justify-content-center"><Loader /> </div>
            : 
            <input type="submit" className="btn btn-sm btn-primary w-100 fw-semibold py-2" value="INGRESAR"/>
          }
          <p className="text-light-emphasis text-end mt-1">¿Aún no tienes cuenta? <NavLink to='/register' className='text-decoration-none'>¡Regístrate!</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;