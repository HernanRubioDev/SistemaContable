import AddAccountForm from "./AddAccountForm";

const AddAccountContainer = ()=>{
  return(
    <div className="d-flex flex-column align-items-center flex-grow-1 bg-secondary-subtle px-3">
      <div className="w-100 my-3 ms-4">
        <h3 className="text-secondary fw-bold text-body-tertiary">Registrar cuenta</h3>
      </div>
      <AddAccountForm />
    </div>
  );
}
export default AddAccountContainer;