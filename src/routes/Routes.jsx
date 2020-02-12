import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../component/common/Home";
import ListRoom from "../component/common/ListRoom";
import ViewRoom from "../component/common/ViewRoom";
import AddRoom from "../component/common/AddRoom";
import NotFound from "../component/common/NotFound";

import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import PrivateRoute from "../component/auth/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/list-room" component={ListRoom} />
      {/* <PrivateRoute path="/view-room/:id" component={ViewRoom} />
      <PrivateRoute path="/add-room" component={AddRoom} /> */}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
