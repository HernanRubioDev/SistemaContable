const AccountTableRow = ()=>{
  return(
  <tr>
    <td>Cajas y Bancos</td>
    <td>Activo</td>
    <td>01/11/2023</td>
    <td>10000</td>
    <td className="d-flex justify-content-center gap-2">
      <button className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">delete</span></button>
      <button className="border-0 bg-transparent"><span className="material-symbols-outlined text-secondary">edit_square</span></button>
    </td>
  </tr>
  );
}

export default AccountTableRow;