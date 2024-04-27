import { useState } from "react";
import LedgerTableRow from "./LedgerTableRow";
import { useEffect } from "react";

const LedgerBookTable = ({movements})=>{
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    if(movements.length !== 0){
      
    }
  },[movements])

  

  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">Descripción</th>
          <th className="text-secondary-emphasis" scope="col">Debe</th>
          <th className="text-secondary-emphasis" scope="col">Haber</th>
          <th className="text-secondary-emphasis" scope="col">Saldo</th>
        </tr>
      </thead>
      <tbody>
        {movements.map(move => <LedgerTableRow key={move.id_move} move={move} line={move.lines[0]}/>)}
        <tr>
          <td colSpan='3'>Total</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
export default LedgerBookTable;