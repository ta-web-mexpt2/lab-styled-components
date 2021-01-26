import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/notifications" component={Notifications} />
    <Route exact path="/messages" component={Messages} />
    <Route exact path="/bookmarks" component={Bookmarks} />
  </Switch>
);

export default Routes;
