import React from "react";
import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/PageLayout";
import WhoToFollow from "./components/WhoToFollow";


function AppStyledComponent() {
  return (
    <div className="App">
      <PageLayout>
        <Routes />
        <WhoToFollow/>
      </PageLayout>
    </div>
  );
}
const AppWithRouter = withRouter(AppStyledComponent);

export default AppWithRouter;
