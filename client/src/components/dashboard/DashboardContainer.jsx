import '@/stylesheets/Dashboard.css'
import InfoModal from '../InfoModal';
import useChart from '@/hooks/charts/useChart';
import BarChart from './BarChart';

const DashboardContainer = ()=>{
  const {loading, accounts, response, accountsForm, handleChange} = useChart()
  return(
    <div className="dashboard-container text-center px-3 py-2 d-flex flex-column col-9 flex-grow-1 gap-2">
      <BarChart accounts={accounts} accountsForm={accountsForm} handleChange={handleChange}/>
      <InfoModal content={response}/>
    </div>
  );
}

export default DashboardContainer