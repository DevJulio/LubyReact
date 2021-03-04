import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Repos from "./pages/Repos";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Details from "./pages/FollowerDetails";
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/Profile" component={Profile}></Route>
                <Route path="/Repos" component={Repos}></Route>
                <Route path="/Followers" component={Followers}></Route>
                <Route path="/Following" component={Following}></Route>
                <Route path="/Details" component={Details}></Route>

            </Switch>

        </BrowserRouter>
    );
}

export default Routes