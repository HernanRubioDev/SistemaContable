const AddMovementTableRow = ()=>{
  return(
  <tr>
    <td><input className="form-control form-control-sm col-2" type="text" name="account" disabled/></td>
    <td><input className="form-control form-control-sm col-2" type="text" name="debit" disabled/></td>
    <td><input className="form-control form-control-sm col-2" type="text" name="credit" disabled/></td>
    <td className="d-flex justify-content-center gap-2">
      <button className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">delete</span></button>
      <button className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">edit_square</span></button>
    </td>
  </tr>
  )
}
export default AddMovementTableRow;