import { useState } from "react"

const AddMovementTableRow = ({line, removeLine})=>{
  const {account, type, amount} = line
  return(
  <tr>
    <td><input className="form-control form-control-sm col-2 text-center" type="text" name="account" disabled defaultValue={account}/></td>
    <td><input className="form-control form-control-sm col-2 text-center" type="text" name="debit" disabled defaultValue={type === 'debit' ? amount : ''}/></td>
    <td><input className="form-control form-control-sm col-2 text-center" type="text" name="credit" disabled defaultValue={type === 'credit' ? amount : ''}/></td>
    <td className="d-flex justify-content-center gap-2">
      <button onClick={()=>removeLine(line)} type="button" className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">delete</span></button>
    </td>
  </tr>
  )
}
export default AddMovementTableRow;