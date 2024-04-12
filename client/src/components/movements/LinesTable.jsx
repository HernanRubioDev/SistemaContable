import LinesTableRow from "./LineTableRow"

const LineTable = ({lines})=>{
  return(
    <table className="table table-sm table-bordered table-striped">
      <thead>
        <tr>
          <th className="text-center" scope="col">N°</th>
          <th className="text-center" scope="col">Debe</th>
          <th className="text-center" scope="col">Haber</th>
        </tr>
      </thead>
      <tbody>
      {lines.map((line, index) => <LinesTableRow key={index} line={line} index={index}/>)}
      </tbody>
    </table>
  )
}

export default LineTable