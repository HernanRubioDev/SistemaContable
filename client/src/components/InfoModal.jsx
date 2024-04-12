
const InfoModal = ({content, children})=>{
  const {title, message, status} = content
  return(
  <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0">
          <h1 className="modal-title fs-5" id="infoModalLabel">{title && title}</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body py-1">
          {message && <p>{message}</p>}
          {children}
        </div>
        <div className="modal-footer pt-0 border-0">
          <button type="button" className={`btn btn-${status}`} data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoModal