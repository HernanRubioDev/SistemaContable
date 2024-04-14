
const InfoModal = ({content, children})=>{
  const {title, message, status, btnTitle, action, params} = content
  return(
  <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="infoModalLabel" >{title && title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {message && <p className="m-0">{message}</p>}
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={()=>{action && action(params)}} type="button" className={`btn btn-${status}`} data-bs-dismiss="modal">{btnTitle ? btnTitle : 'Cerrar'}</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoModal