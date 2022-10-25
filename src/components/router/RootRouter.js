import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Login from "../login/Login";
import Chat from "../chat/Chat";
import Register from '../register/Register';
import ProtectedRoute from "./ProtectedRoute";

const RootRouter = ({ isAuthenticated, onLogin, onLogout }) => {
    return (
        <Router>
            <Switch>

                <ProtectedRoute exact path="/" component={Chat} isAuthenticated={isAuthenticated} />

                <Route exact path="/login" component={(props) => <Login isAuthenticated={isAuthenticated} onLogin={onLogin} {...props} />} />

                <Route exact path='/register' component={(props) => <Register isAuthenticated={isAuthenticated} {...props}/>} />

                <Route component={
                    () => "This route is not defined"
                } />

            </Switch>
        </Router>
    );
};

export default RootRouter;
