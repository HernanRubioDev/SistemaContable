const JournalTableRow = ({move})=>{
  const {move_date, description, lines} = move
  return(
    <tr>
      <td>{move_date}</td>
      <td>{description}</td>
      <td className="d-flex flex-column p-0">
        {lines.map((line, index) => <span key={index} className={`border-bottom ${line.move_type === "debit" ? "text-start ps-1" : "text-end pe-1"}`}>{line.account}</span>)}
      </td>
      <td className="p-0">{lines.map((line, index) => <div key={index} className="d-flex flex-column border-bottom">{line.move_type === "debit" ? <span className={`${line.move_type==="debit" ? 'text-start' : 'text-end'} ms-1`}>{line.line_amount}</span> : <span className="invisible" key={index}>{'0'}</span>}</div>)}</td>
      <td className="p-0">{lines.map((line, index) => <div key={index} className="d-flex flex-column border-bottom">{line.move_type === "credit" ? <span className={`${line.move_type==="credit" ? 'text-end' : 'text-start'} me-1`}>{line.line_amount}</span> : <span className="invisible" key={index}>{'0'}</span>}</div>)}</td>
    </tr>
  );
}
export default JournalTableRow;