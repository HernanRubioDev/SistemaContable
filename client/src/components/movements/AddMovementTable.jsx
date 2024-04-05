import AddMovementTableRow from "./AddMovementTableRow"
const AddMovementTable = ({movement, removeLine})=>{
  const {lines} = movement
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
        {lines.map((line, index) => <AddMovementTableRow key={index} line={line} removeLine={removeLine}/>)}
      </tbody>
    </table>
    </div>
  )
}

export default AddMovementTable