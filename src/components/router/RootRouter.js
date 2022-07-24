import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "../login/Login";
import { UserContext } from "../context/UserContext";
import Chat from "../chat/Chat";

const RootRouter = () => {
    const msg = "Hello from Root Router";
    return (
        <Router>
            <Switch>
                <UserContext.Provider value={msg}>

                    <Route exact path="/" component={Chat} />

                    <Route exact path="/login" component={Login} />

                </UserContext.Provider>

                <Route component={
                    () => "This route is not defined"
                } />

            </Switch>
        </Router>
    );
};

export default RootRouter;
