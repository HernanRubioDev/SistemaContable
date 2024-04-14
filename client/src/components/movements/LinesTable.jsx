import LinesTableRow from "./LineTableRow"

const LineTable = ({lines})=>{
  return(
    <table className="table table-sm table-bordered table-striped m-0">
      <thead>
        <tr>
          <th className="text-center w-50" scope="col">Cuenta</th>
          <th className="text-center" scope="col">Debe</th>
          <th className="text-center" scope="col">Haber</th>
        </tr>
      </thead>
      <tbody>
      {lines.map((line, index) => <LinesTableRow key={index} line={line}/>)}
      </tbody>
    </table>
  )
}

export default LineTable