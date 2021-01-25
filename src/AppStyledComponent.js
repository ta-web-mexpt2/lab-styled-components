import React from "react";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";

import "./App.css";

function AppStyledComponent() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}
const AppWithRouter = withRouter(AppStyledComponent);

export default AppWithRouter;
