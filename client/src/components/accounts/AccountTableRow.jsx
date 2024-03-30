const AccountTableRow = ({account})=>{
  const {name, account_type, date_creation, code} = account
  return(
  <tr>
    <td>{name}</td>
    <td>{account_type}</td>
    <td>{date_creation}</td>
    <td>{code}</td>
    <td className="d-flex justify-content-center gap-2">
      <button className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">delete</span></button>
      <button className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">edit_square</span></button>
    </td>
  </tr>
  );
}

export default AccountTableRow;