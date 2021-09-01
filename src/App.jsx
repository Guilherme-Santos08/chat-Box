import useAuth from "./hooks/useAuth";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";

function App() {
  const { chat } = useAuth();

  return <>{chat ? <Chat /> : <Login />}</>;
}

export default App;
