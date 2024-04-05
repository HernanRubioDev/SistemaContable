import useAddMovement from '@/hooks/movements/useAddMovement';
import AddMovementTable from './AddMovementTable';
import '@/stylesheets/AddMovementForm.css';
import InfoModal from '../InfoModal';
import InfoToast from '../InfoToast';
import { useEffect } from 'react';
import Loader from '../Loader';

const AddMovementForm = ()=>{
  const {movement, accounts, accountResponse, loading, handleChange, getAccounts, createMovement, addLine, removeLine} = useAddMovement()
  const {movement_account, movement_ammount, movement_description, lines} = movement
  useEffect(()=>{
    if(accounts.length === 0) getAccounts()
  },[])

  return(
    <>
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3 h-100">
      <form className="add-account-form bg-white d-flex flex-column col-lg-10 col-12 rounded-2 p-3 shadow gap-3 mt-2 overflow-hidden">
        <div className="w-100">
          <h3 className="text-secondary fw-bold text-body-tertiary fs-5 m-0">Registrar asiento</h3>
        </div>
        <div className="d-flex flex-wrap column-gap-3">
          <div className="flex-grow-1">
            <label htmlFor="movementDate" className="form-label text-secondary fw-semibold m-0">Fecha</label>
            <input onChange={(e)=>{handleChange(e)}} type="date" className={`form-control`} id="movementDate" placeholder="Ej: Banco Río" name="movement_date" value={movement.movement_date}/>
          </div>
          <div className="flex-grow-1">
            <label htmlFor="movementAmmount" className="form-label text-secondary fw-semibold m-0">Monto</label>
            <input onChange={(e)=>{handleChange(e)}} type="number" className={`form-control`} id="movementAmmount" placeholder="$" name="movement_ammount" value={movement.movement_ammount} min='0'/>
          </div>
          </div>
          <div className="d-flex flex-wrap column-gap-3">
            <div className="flex-grow-1">
              <label htmlFor="movementAccount" className="form-label text-secondary fw-semibold m-0">Cuenta</label>
              <select onChange={(e)=>handleChange(e)} className="form-select" id="movementAccount" aria-label="Default select example" name="movement_account" value={movement.movement_account}>
                <option value="" defaultChecked disabled>Selecciona una cuenta</option>
                {accounts.map(acc => <option key={acc.id_account} value={acc.name}>{acc.name}</option>)}
              </select>
            </div>
            <div className="d-flex flex-column flex-grow-1">
              <label className="form-label text-secondary fw-semibold m-0">Tipo</label>
              <div className="d-flex align-items-center border h-100 rounded-1">
                <div className="d-flex flex-grow-1 justify-content-center">
                  <input onChange={(e)=>{handleChange(e)}} className="form-check-input" type="radio" id="debtMovement" name="movement_type" defaultChecked value='debit'/>
                  <label className="form-check-label" htmlFor="debtMovement">Debe</label>
                </div>
                <div className="d-flex flex-grow-1">
                  <input onChange={(e)=>{handleChange(e)}} className="form-check-input" type="radio" id="creditMovement" name="movement_type" value='credit'/>
                  <label className="form-check-label" htmlFor="creditMovement">Haber</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            <label htmlFor="movementDescription" className="form-label text-secondary fw-semibold m-0">Descripción</label>
            <textarea onChange={(e)=>handleChange(e)} className="form-control movement-textarea" id="movementDescription" name="movement_description" value={movement_description}/>
          </div>
          {loading ? <div className='d-flex justify-content-center'><Loader /></div> 
          :  
          <div className='d-flex flex-wrap column-gap-3 row-gap-2'>
            <button type='button' onClick={()=>addLine(movement)} className='btn btn-sm btn-secondary d-flex flex-grow-1 justify-content-center' disabled={movement_ammount==='' || movement_account==='' || movement_description===''}><span className="material-symbols-outlined me-1">add</span>Agregar</button>
            <button type='button' onClick={()=>createMovement(movement)} className='btn btn-sm btn-success d-flex flex-grow-1 justify-content-center' disabled={lines.length < 2} ><span className="material-symbols-outlined me-2">save</span>Registrar</button>
          </div>
          }
          <AddMovementTable movement={movement} removeLine={removeLine}/>
      </form>
    </div>

    <InfoModal content={accountResponse} />
    <InfoToast content={accountResponse} />
    </>
  )
}
export default AddMovementForm;