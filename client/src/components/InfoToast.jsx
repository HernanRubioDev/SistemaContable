const InfoToast = ({content})=>{
  const {title, message, success} = content

  return(
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="infoToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
        <span className={`material-symbols-outlined ${success ? 'text-success' : 'text-danger'}`}>{success ? 'check_circle' : 'error'}</span>
          <strong className="me-auto ms-1">{title && title}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          {message && message}
        </div>
      </div>
    </div>
  )
}

export default InfoToast;