import { LoginScreen } from "./styles.js";
import { useHistory } from "react-router-dom";

export function Login() {
  const history = useHistory();

  return (
    <LoginScreen>
      <button onClick={() => history.push("/chat")}>Logar com o google</button>
    </LoginScreen>
  );
}
