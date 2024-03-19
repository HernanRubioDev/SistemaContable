import AccountLinks from "./AccountLinks";
import '@/stylesheets/AccountingMenu.css';
import MovementLinks from "./MovementLinks";
import BookLinks from "./BooksLinks";
const AccountingMenu = ()=>{
return(
  <div className="d-flex flex-column h-100 bg-body-tertiary">
    <h5 className="text-body-secondary ms-2 mt-2">Menu</h5>
    <AccountLinks />
    <MovementLinks />
    <BookLinks />
  </div>
);
}

export default AccountingMenu;