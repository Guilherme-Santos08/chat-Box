import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Login />} />
          <Route path="/chat" exact render={() => <Chat />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
