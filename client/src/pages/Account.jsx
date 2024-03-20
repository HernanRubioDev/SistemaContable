import Header from "@/components/Header";
import AccountingMenu from "@/components/menu/AccountingMenu";
import MenuWrapper from "@/components/menu/MenuWrapper";
const Account =({children})=>{
  return(
    <main className="vh-100 d-flex flex-wrap bg-body-secondary overflow-hidden">
      <Header />
      <MenuWrapper>
        <AccountingMenu/>
      </MenuWrapper>
      {children}
    </main>
  );
}
export default Account;