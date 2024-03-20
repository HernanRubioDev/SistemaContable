import AccountTableRow from "./AccountTableRow";

const AccountTable = ()=>{
  return(
    <table className="table table-sm table-bordered table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Creada</th>
          <th scope="col">Código</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <AccountTableRow />
      </tbody>
    </table>
  );
}

export default AccountTable;