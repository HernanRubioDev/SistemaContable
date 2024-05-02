import Header from "@/components/Header";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import AccountingMenu from "@/components/menu/AccountingMenu";
import MenuWrapper from "@/components/menu/MenuWrapper";

const Dashboard = ()=>{
  return(
    <main className="vh-100 d-flex flex-grow-1 flex-wrap bg-body-secondary overflow-hidden overflow-auto">
      <Header />
      <MenuWrapper>
        <AccountingMenu />
      </MenuWrapper>
      <DashboardContainer />
    </main>
  )
}

export default Dashboard;