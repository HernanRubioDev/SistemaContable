import { Chart } from "react-google-charts";
import AccountSelect from "./AccountSelect";

const BarChart = ({accounts, accountsForm, handleChange})=>{
  const {positiveResult, negativeResult} = accountsForm
  const chartOptions = {
    backgroundColor: '#e2e3e5', // Color de fondo del gráfico
    chartArea: {
      backgroundColor: 'white', // Color de fondo del área del gráfico,
      width:'100%',
      height:'100%'
    },
    hAxis: {
      textPosition: 'in', // Colocar el texto dentro del eje horizontal
    },
    vAxis: {
      textPosition: 'in', // Colocar el texto dentro del eje vertical
    },
    titlePosition: 'in', // Colocar el título dentro del gráfico
    legend: {
      position: 'in',
    },
  };
  const data = [
    ["Mes", `${positiveResult}`, `${negativeResult}`],
    ["2014", 1000, 400],
    ["2015", 1300, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
    ["2018", 1030, 540],
    ["2019", 1030, 540],
  ];
  return(
    <div className="d-flex flex-column flex-grow-1 gap-2 rounded p-3 bg-white shadow-sm h-50">
      <div className="d-flex gap-3">
        <AccountSelect accounts={accounts} accountsForm={accountsForm} handleChange={handleChange}/>
      </div>
      <Chart
        chartType="Bar"
        data={data}
        width="100%"
        height="100%"
        legendToggle
        options={chartOptions}
      />
    </div>
)
}

export default BarChart