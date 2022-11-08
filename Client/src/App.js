/** @format */
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./config/history";
import PublicRoute from "./components/common/publicRoute";
import Game from "./components/pages/games/game";
import Home from "./components/pages/home/Home";
import Connect from "./components/pages/connect/connect";
import Tickets from "./components/pages/tickets";
import Rewards from "./components/pages/rewards";
import "./App.css";
import PrivacyPolicy from "./components/pages/home/PrivacyPolicy";
import TermsAndConditions from "./components/pages/home/TermsAndConditions";
import Disclaimer from "./components/pages/home/Disclaimer";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute exact path="/game" component={Game} />
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute exact path="/home" component={Home} />
                <PublicRoute exact path="/tickets" component={Tickets} />
                <PublicRoute
                    exact
                    path="/tickets/:section"
                    component={Tickets}
                />
                <PublicRoute exact path="/rewards" component={Rewards} />
                <PublicRoute exact path="/connect" component={Connect} />
                <PublicRoute exact path="/privacy" component={PrivacyPolicy} />
                <PublicRoute exact path="/disclaimer" component={Disclaimer} />
                <PublicRoute
                    exact
                    path="/terms"
                    component={TermsAndConditions}
                />
                <Route component={<></>} />
            </Switch>
        </Router>
    );
}

export default App;
