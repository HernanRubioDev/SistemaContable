const AccountCreditCard = ()=>{
  return(
  <div className="d-flex w-50  h-100 shadow-sm">
    <div className="card w-100">
      <div className="card-body">
        <form className="p-0">
          <label className="form-label text-secondary fw-semibold m-0">Cuenta</label>
          <select className="form-select" name="account">
            <option disabled>Seleccione una cuenta</option>
          </select>
          <div className="d-flex pt-3">
            <span className="form-label text-secondary fw-semibold m-0">Saldo:</span>
            <span className="form-label text-secondary fw-semibold m-0 ms-3">50000</span>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AccountCreditCard