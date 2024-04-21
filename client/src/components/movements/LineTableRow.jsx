const LinesTableRow = ({line})=>{
  const {move_type, line_amount, account} = line
  return(
    <tr>
      <td className={move_type==="debit" ? 'text-start' : 'text-end'}>{account}</td>
      <td className="text-start">{move_type==="debit" ? line_amount : ''}</td>
      <td className="text-end">{move_type==="credit" ? line_amount : ''}</td>
    </tr>
  )
}

export default LinesTableRow