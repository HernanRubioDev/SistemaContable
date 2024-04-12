import MovementTableRow from "./MovementTableRow";
import '@/stylesheets/SearchMovementForm.css'
const SearchMovementTable = ({movements, searchLines})=>{
  return(
    <div className="overflow-y-auto">
      <table className="table table-sm table-bordered table-striped text-center">
      <thead className="sticky-top">
        <tr>
          <th className="text-secondary-emphasis" scope="col">N°</th>
          <th className="text-secondary-emphasis" scope="col">Fecha</th>
          <th className="text-secondary-emphasis" scope="col">Descripción</th>
          <th className="text-secondary-emphasis" scope="col">Ver</th>
        </tr>
      </thead>
      <tbody >
        {movements.map((m, index) => <MovementTableRow key={index} movement={m} index={index+1} searchLines={searchLines}/>)}   
      </tbody>
    </table>
  </div>
  )
}
export default SearchMovementTable;