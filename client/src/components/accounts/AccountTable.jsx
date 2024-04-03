import AccountTableRow from "./AccountTableRow";

const AccountTable = ({accounts})=>{
  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center mt-2">
        <thead className="sticky-top">
          <tr>
            <th className="text-secondary-emphasis" scope="col">Nombre</th>
            <th className="text-secondary-emphasis" scope="col">Tipo</th>
            <th className="text-secondary-emphasis" scope="col">Creada</th>
            <th className="text-secondary-emphasis" scope="col">Código</th>
            <th className="text-secondary-emphasis" scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length !== 0 ? 
          accounts.map(account => <AccountTableRow key={account.id_account} account={account}/>)
          :
          <tr><td colSpan='5'>Sin datos</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default AccountTable;