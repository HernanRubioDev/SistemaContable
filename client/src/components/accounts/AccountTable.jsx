import AccountTableRow from "./AccountTableRow";

const AccountTable = ({accounts})=>{
  console.log(accounts)
  return(
    <table className="table table-sm table-bordered table-striped text-center mt-2">
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
        {accounts.map(account => <AccountTableRow key={account.id_account} account={account}/>)}
        
      </tbody>
    </table>
  );
}

export default AccountTable;