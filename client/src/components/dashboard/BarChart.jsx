import { Chart } from "react-google-charts";
import AccountSelect from "./AccountSelect";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../Loader";

const BarChart = ({loading, accounts, movements, accountsForm, handleChange})=>{
  const {positive_account, negative_account} = accountsForm
  const [data, setData] = useState([
    ["Mes", `${positive_account}`, `${negative_account}`],
    ["No hay datos", 0, 0]
  ]);

    useEffect(() => {
      if (movements.length !== 0) {
        setData([
          ["Mes", accountsForm.positive_account, accountsForm.negative_account], // Nuevo array al principio
          ...movements.map(move => [move.month, parseFloat(move.r_plus_total), parseFloat(move.r_minus_total)]) // Mapeo de los datos de movements
        ]);
      }
    }, [movements]);

    const chartOptions = {
      backgroundColor: '#e2e3e5',
      chartArea: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
      },
      hAxis: {
        textPosition: 'in',
      },
      vAxis: {
        textPosition: 'in',
        minValue: 0,
      },
      titlePosition: 'in',
      legend: {
        position: 'in',
      },
    };
  return(
    <div className="d-flex flex-column flex-grow-1 gap-2 rounded p-3 bg-white shadow-sm h-50">
      <div className="d-flex gap-3">
        <AccountSelect accounts={accounts} accountsForm={accountsForm} handleChange={handleChange}/>
      </div>
      {loading ?
      <div className="d-flex justify-content-center"><Loader /></div>
       : 
      <Chart
        chartType="Bar"
        data={data}
        width="100%"
        height="100%"
        legendToggle
        options={chartOptions} />
      }
    </div>
)
}

export default BarChart