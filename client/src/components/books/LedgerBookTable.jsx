import { useState } from "react";
import LedgerTableRow from "./LedgerTableRow";

const LedgerBookTable = ({movements, accountForm, accounts})=>{
  const [total, setTotal] = useState(0)
  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">Descripción</th>
          <th className="text-secondary-emphasis" scope="col">Debe</th>
          <th className="text-secondary-emphasis" scope="col">Haber</th>
        </tr>
      </thead>
      <tbody>
        {movements.map(move => <LedgerTableRow key={move.id_move} move={move} line={move.lines[0]} accountForm={accountForm} accounts={accounts} total={total} setTotal={setTotal}/>)}
        {movements.length !== 0 &&
        <tr>
          <td colSpan='1' className="bg-primary-subtle fw-semibold">Total</td>
          <td colSpan="2" className="bg-primary-subtle fw-semibold">{<div className="d-flex justify-content-end"><p className="my-0 w-50">{total}</p></div>}</td>
        </tr>
        }
      </tbody>
    </table>
  </div>
  );
}
export default LedgerBookTable;