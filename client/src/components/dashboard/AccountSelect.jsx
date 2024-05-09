const AccountSelect = ({accounts, accountsForm, handleChange})=>{
  
  return(
  <form className="d-flex p-0 gap-3">
    <div className="d-flex flex-column">
      <label htmlFor="positivesResultes" className="form-label text-secondary fw-semibold m-0">Resultados positivos</label>
      <select onChange={(e)=>handleChange(e)} className="form-select" id="positivesResultes" name="positive_account" value={accountsForm.positive_account}>
        <option value="" defaultChecked unselectable="on">Seleccione una cuenta</option>
        {accounts.map(acc => acc.account_type === "R+" && <option key={acc.id_account}>{acc.name}</option>)}
      </select>
    </div>
    <div className="d-flex flex-column">
      <label htmlFor="negativesResults" className="form-label text-secondary fw-semibold m-0">Resultados negativos</label>
      <select onChange={(e)=>handleChange(e)} className="form-select" id="negativesResults" name="negative_account" value={accountsForm.negative_account}>
        <option value="" defaultChecked unselectable="on">Seleccione una cuenta</option>
        {accounts.map(acc => acc.account_type === "R-" && <option key={acc.id_account}>{acc.name}</option>)}
      </select>
    </div>
  </form>
  )
}

export default AccountSelect