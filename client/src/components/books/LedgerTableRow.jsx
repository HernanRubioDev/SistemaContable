
const LedgerTableRow = ({move, line})=>{
  const {description} = move
  const {move_type, line_amount} = line
  return(
    <tr>
      <td>{description}</td>
      <td>{move_type==="debit" && line_amount}</td>
      <td>{move_type==="credit" && line_amount}</td>
      <td></td>
    </tr>
  );
}
export default LedgerTableRow;