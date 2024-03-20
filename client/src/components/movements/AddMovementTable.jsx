import AddMovementTableRow from "./AddMovementTableRow"
const AddMovementTable = ()=>{
  return(
    <div className="movement-table overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">Cuenta</th>
          <th className="text-secondary-emphasis" scope="col">Debe</th>
          <th className="text-secondary-emphasis" scope="col">Haber</th>
          <th className="text-secondary-emphasis" scope="col">Acción</th>
        </tr>
      </thead>
      <tbody >
        <AddMovementTableRow />
      </tbody>
    </table>
    </div>
  )
}

export default AddMovementTable