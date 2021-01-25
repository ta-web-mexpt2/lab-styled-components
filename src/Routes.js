import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './containers/Home'
import Explore from './containers/Explore'


const Routes = () => (
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/explore' component = {Explore} />
    </Switch>
);

export default Routes;