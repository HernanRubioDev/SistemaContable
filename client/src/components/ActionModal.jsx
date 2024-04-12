const ActionModal = ({title, btnColor, action, btnTitle, children})=>{
  return(
    <div className="modal fade" id="actionModal" tabIndex="-1" aria-labelledby="actionModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="actionModalLabel">{title && title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button onClick={(e)=>action(e)} type="button" className={`btn btn-${btnColor}`} data-bs-dismiss="modal">{btnTitle && btnTitle}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionModal;