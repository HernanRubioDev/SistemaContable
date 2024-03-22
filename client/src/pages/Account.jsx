import Header from "@/components/Header";
import AccountingMenu from "@/components/menu/AccountingMenu";
import MenuWrapper from "@/components/menu/MenuWrapper";
import { Outlet } from "react-router-dom";
const Account =()=>{
  return(
    <main className="vh-100 d-flex flex-wrap bg-body-secondary overflow-hidden">
      <Header />
      <MenuWrapper>
        <AccountingMenu/>
      </MenuWrapper>
      <Outlet />
    </main>
  );
}
export default Account;