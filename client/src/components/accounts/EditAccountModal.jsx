const EditAccountModal = ({content, accountToEdit, editAccount, handleAccountToEdit})=>{
  const {title, status, btnTitle}= content
  return(
    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={(e)=>editAccount(e, accountToEdit)} className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModalLabel" >{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="flex-grow-1">
              <label htmlFor="accountToEditName" className="form-label text-secondary fw-semibold m-0">Nombre</label>
              <input onChange={(e)=>handleAccountToEdit(e)} type="text" className="form-control" id="accountToEditName" placeholder="Ej: Banco Río" name="name" value={accountToEdit.name} autoFocus/>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className={`btn btn-${status}`} data-bs-dismiss="modal">{btnTitle ? btnTitle : 'Cerrar'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditAccountModal;