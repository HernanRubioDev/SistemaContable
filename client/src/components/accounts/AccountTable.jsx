import AccountTableRow from "./AccountTableRow";

const AccountTable = ()=>{
  return(
    <table className="table table-sm table-bordered table-striped text-center">
      <thead>
        <tr>
          <th className="text-secondary-emphasis" scope="col">Nombre</th>
          <th className="text-secondary-emphasis" scope="col">Tipo</th>
          <th className="text-secondary-emphasis" scope="col">Creada</th>
          <th className="text-secondary-emphasis" scope="col">Código</th>
          <th className="text-secondary-emphasis" scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <AccountTableRow />
      </tbody>
    </table>
  );
}

export default AccountTable;