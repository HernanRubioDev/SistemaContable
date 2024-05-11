import { NavLink } from "react-router-dom";
import Loader from "../Loader";
const RegisterForm = ({user, registerErrors, registerLoading, handleChange, handleSubmit})=>{

  return(
    <div className="col-12 col-lg-9 d-flex rounded-3 h-75 shadow">
      <div className="d-none d-lg-flex flex-column justify-content-center col-6 bg-body-secondary rounded-start-3">
        <h1 className="text-center text-light-emphasis fw-bold fs-1">¡Regístrate!</h1>
        <img className='col-6 align-self-center' src='/images/login-background.svg' alt="Logo para formulario de registrio."/>
        <p className='text-light-emphasis text-center fw-semibold'>¡Lleva tus finanzas de una manera facil y rápida!</p>
      </div>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="d-flex flex-column justify-content-center col-12 col-lg-6 px-4 py-4 rounded-end-3 bg-white">
        <div className="d-flex">
          <div className="mb-3 w-100 pe-1">
            <label htmlFor="name" className="form-label text-secondary fw-semibold my-0">Nombre</label>
            <input onChange={(e)=>handleChange(e)} type="text" className={`form-control ${registerErrors.name && 'is-invalid'}`} id="name" placeholder="Ingrese su nombre" name="name" value={user.name} autoFocus/>
            <p className="text-danger lh-1 my-0">{registerErrors && registerErrors.name}</p>
          </div>
          <div className="mb-3 w-100 ps-1">
            <label htmlFor="last_name" className="form-label text-secondary fw-semibold my-0">Apellido</label>
            <input onChange={(e)=>handleChange(e)} type="text" className={`form-control ${registerErrors.last_name && 'is-invalid'}`} id="last_name" placeholder="Ingrese su apellido" name="last_name" value={user.last_name}/>
            <p className="text-danger lh-1 my-0">{registerErrors && registerErrors.last_name}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-secondary fw-semibold my-0">Email</label>
          <input onChange={(e)=>handleChange(e)} type="email" className={`form-control ${registerErrors.email && 'is-invalid'}`} id="email" placeholder="Ingrese su email" name="email" value={user.email}/>
          <p className="text-danger lh-1 my-0">{registerErrors && registerErrors.email}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-secondary fw-semibold my-0">Contraseña</label>
          <input onChange={(e)=>handleChange(e)} type="password" className={`form-control ${registerErrors.password && 'is-invalid'}`} id="password" placeholder="Ingrese su contraseña" autoComplete="false" name="password" value={user.password}/>
          <p className="text-danger lh-1 my-0">{registerErrors && registerErrors.password}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="re_password" className="form-label text-secondary fw-semibold my-0">Repite tu contraseña</label>
          <input onChange={(e)=>handleChange(e)} type="password" className={`form-control ${registerErrors.re_password && 'is-invalid'}`} id="re_password" placeholder="Repita su contraseña" name="re_password" value={user.re_password}/>
          <p className="text-danger lh-1 my-0">{registerErrors && registerErrors.re_password}</p>
        </div>
        <div className="mt-3">
          {registerLoading ?
            <div className="d-flex justify-content-center"><Loader /> </div>
            :
            <input type="submit" className="btn btn-sm btn-primary w-100 fw-semibold py-2" value="REGISTRARSE"/>
          }
          <p className="text-light-emphasis text-end mt-1">¿Ya tienes cuenta? <NavLink to='/' className='text-decoration-none'>¡Ingresa!</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;