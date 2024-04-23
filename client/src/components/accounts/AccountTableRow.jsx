const AccountTableRow = ({account, handleDelete, handleEdit})=>{
  const {name, account_type, date_creation, code, recive_credit} = account
  return(
  <tr>
    <td className={!recive_credit ? "fw-semibold" : ''}>{name}</td>
    <td className={!recive_credit ? "fw-semibold" : ''}>{account_type}</td>
    <td className={!recive_credit ? "fw-semibold" : ''}>{date_creation}</td>
    <td className={!recive_credit ? "fw-semibold" : ''}>{code}</td>
    <td className="d-flex justify-content-center gap-2">
      <button onClick={()=>handleDelete(account)} className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">delete</span></button>
      <button onClick={()=>handleEdit(account)} className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">edit_square</span></button>
    </td>
  </tr>
  );
}

export default AccountTableRow;