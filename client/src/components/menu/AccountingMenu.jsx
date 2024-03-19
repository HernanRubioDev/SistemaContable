import AccountLinks from "./AccountLinks";
import MovementLinks from "./MovementLinks";
import BookLinks from "./BooksLinks";
import DashboardLink from "./DashboardLink";
const AccountingMenu = ()=>{
return(
  <div className="d-flex flex-column h-100 bg-body-tertiary">
    <h5 className="text-body-secondary ms-2 mt-2">Menu</h5>
    <DashboardLink />
    <AccountLinks />
    <MovementLinks />
    <BookLinks />
  </div>
);
}

export default AccountingMenu;