import useLogin from "@/hooks/users/useLogin";
import LoginForm from "../components/login/LoginForm";
import InfoModal from "@/components/InfoModal";

const Login = ()=>{
  const {user, loginErrors, loginLoading, loginResponse, handleChange, handleSubmit} = useLogin()
  return(
    <main className="vh-100 d-flex justify-content-center align-items-center bg-light-subtle">
      <LoginForm user={user} loginErrors={loginErrors} loginLoading={loginLoading} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <InfoModal content={loginResponse}/>
    </main>
  );
}
export default Login