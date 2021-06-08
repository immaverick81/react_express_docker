import React from "react"
import { Switch, Route } from "react-router-dom"
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import LandingPage from "./Pages/Landing/LandingPage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import SupportPage from "./Pages/Support/SupportPage";

const Routes = () => {
    return (
        <Switch>
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/login" component={LoginPage} exact></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/dashboard" component={DashboardPage}></Route>
        <Route path="/contact" component={SupportPage}></Route>
      </Switch>
    )
}
export default Routes;