import AccountingMenu from "@/components/menu/AccountingMenu";
import MenuWrapper from "@/components/menu/MenuWrapper";

const Dashboard = ()=>{
  return(
    <main className="vh-100 d-flex flex-wrap bg-light-subtle overflow-hidden">
      <MenuWrapper>
        <AccountingMenu />
      </MenuWrapper>
    </main>
  )
}

export default Dashboard;