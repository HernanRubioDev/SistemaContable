import MovementTableRow from "./MovementTableRow";
import '@/stylesheets/SearchMovementForm.css'
const SearchMovementTable = ()=>{
  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">N°</th>
          <th className="text-secondary-emphasis" scope="col">Fecha</th>
          <th className="text-secondary-emphasis" scope="col">Descripción</th>
          <th className="text-secondary-emphasis" scope="col">Acción</th>
        </tr>
      </thead>
      <tbody >
        <MovementTableRow />
      </tbody>
    </table>
  </div>
  )
}
export default SearchMovementTable;