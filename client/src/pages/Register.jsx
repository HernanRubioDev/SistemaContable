import InfoModal from "@/components/InfoModal";
import RegisterForm from "../components/register/RegisterForm";
import useRegister from "@/hooks/users/useRegister";

const Register = ()=>{
  const {user, registerErrors, registerLoading, registerResponse, handleChange, handleSubmit} = useRegister();
  return(
    <main id="register" className="vh-100 d-flex justify-content-center align-items-center bg-light-subtle">
      <RegisterForm user={user} registerErrors={registerErrors} registerLoading={registerLoading} handleChange={handleChange} handleSubmit={handleSubmit} />
      <InfoModal content={registerResponse} />
    </main>
  );
}

export default Register