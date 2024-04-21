const AccountEditForm = ({handleAccountToEdit, accountToEdit})=>{
  return(
  <div className="flex-grow-1">
    <label htmlFor="accountToEditName" className="form-label text-secondary fw-semibold m-0">Nombre</label>
    <input onChange={(e)=>handleAccountToEdit(e)} type="text" className="form-control" id="accountToEditName" placeholder="Ej: Banco Río" name="name" value={accountToEdit.name} autoFocus/>
  </div>
  );
}

export default AccountEditForm