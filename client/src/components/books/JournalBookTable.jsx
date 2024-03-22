import JournalTableRow from "./JournalTableRow";

const JournalBookTable = ()=>{
  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">Operación</th>
          <th className="text-secondary-emphasis" scope="col">Fecha</th>
          <th className="text-secondary-emphasis" scope="col">Descripción</th>
          <th className="text-secondary-emphasis" scope="col">Cuenta</th>
          <th className="text-secondary-emphasis" scope="col">Debe</th>
          <th className="text-secondary-emphasis" scope="col">Haber</th>
        </tr>
      </thead>
      <tbody >
        <JournalTableRow />
      </tbody>
    </table>
  </div>
  )
}

export default JournalBookTable;