import LedgerTableRow from "./LedgerTableRow";

const LedgerBookTable = ()=>{
  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">Operación</th>
          <th className="text-secondary-emphasis" scope="col">Descripción</th>
          <th className="text-secondary-emphasis" scope="col">Debe</th>
          <th className="text-secondary-emphasis" scope="col">Haber</th>
          <th className="text-secondary-emphasis" scope="col">Saldo</th>
        </tr>
      </thead>
      <tbody >
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
        <LedgerTableRow />
      </tbody>
    </table>
  </div>
  );
}
export default LedgerBookTable;