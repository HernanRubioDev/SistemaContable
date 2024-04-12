const LinesTableRow = ({line, index})=>{
  const {move_type, line_amount} = line
  return(
    <tr>
      <td className="text-center">{index+1}</td>
      <td className="text-end">{move_type==="debit" ? line_amount : ''}</td>
      <td className="text-end">{move_type==="credit" ? line_amount : ''}</td>
    </tr>
  )
}

export default LinesTableRow