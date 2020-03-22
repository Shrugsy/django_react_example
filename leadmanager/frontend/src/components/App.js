import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Alerts from "./layout/Alerts";
import Login from "./accounts/login";
import Register from "./accounts/register";
import PrivateRoute from "./common/PrivateRoute";

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={Dashboard}
                                />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/register"
                                    component={Register}
                                />
                            </Switch>
                        </div>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
