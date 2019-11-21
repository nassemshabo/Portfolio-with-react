import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";

const Home = () => {
  return <App />;
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Router;
