import { LoginScreen } from "./styles.js";
import useAuth from "../../hooks/useAuth"

export function Login() {
  const { signinGoogle } = useAuth();

  return (
    <LoginScreen>
      <button onClick={() => signinGoogle()}>Logar com o google</button>
    </LoginScreen>
  );
}
