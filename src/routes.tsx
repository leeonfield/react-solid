import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Detail, Home, NewTopic, Admin, NewCate, Login } from "./container";
import { PrivateLayout, NotLoggedLayout } from "./layouts";
const routesList = [
  {
    id: "detail",
    path: "/detail/:id",
    component: Detail,
  },
  {
    id: "new",
    path: "/new",
    component: NewTopic,
  },
  {
    id: "category",
    path: "/category",
    component: NewCate,
  },
  {
    id: "admin",
    path: "/admin",
    component: Admin,
  },
  {
    id: "home",
    path: "/",
    component: Home,
  },
];

const Routes = () => (
  <Router>
    <Switch>
      <NotLoggedLayout component={Login} path="/login" exact></NotLoggedLayout>
      <PrivateLayout path="/" routes={routesList}></PrivateLayout>
    </Switch>
  </Router>
);

export default Routes;