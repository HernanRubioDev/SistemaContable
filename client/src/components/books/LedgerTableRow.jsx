import {useEffect } from "react";

const LedgerTableRow = ({move, line, accountForm, accounts, total, setTotal})=>{
  const {description} = move
  const {move_type, line_amount} = line

  useEffect(()=>{
    const types = {
      "debit": {
        "A": "+", "P": "-", "R+": "-", "R-": "+", "Pa": "+"
      },
      "credit": {
        "A": "-", "P": "+", "R+": "+", "R-": "-", "Pa": "-"
      }
    };
    const account = accounts.find(acc => acc.name === accountForm.name)
    switch (types[move_type][account.account_type]) {
      case "+":
        setTotal(prevTotal => prevTotal + parseFloat(line_amount));
        break;

      case "-":
        setTotal(prevTotal => prevTotal - parseFloat(line_amount));
        break;
    }
  },[move])

  return(
    <tr>
      <td>{description}</td>
      <td>{move_type==="debit" && line_amount}</td>
      <td>{move_type==="credit" && line_amount}</td>
    </tr>
  );
}
export default LedgerTableRow;