import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import ProjectPage from "./components/projectPage/ProjectPage";

const Home = () => {
  return <App />;
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={ProjectPage} />
    </Switch>
  );
};

export default Router;
