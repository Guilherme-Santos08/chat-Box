import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";

const { chat } = useAuth;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !chat ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/chat" component={Chat}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
