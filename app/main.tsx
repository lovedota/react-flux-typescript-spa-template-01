import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import createHistory from "history/createBrowserHistory";
import Loadable from "react-loadable";
import LoadingComponent from "./common/loading-component/loading-component";

// import HomePage from "./home-page/home-page";

declare var System: any;
declare var __dirname: any;
declare var require: any;

const HomePageLoadable = Loadable({
    loader: () => System.import("./modules/home/home-page"),
    LoadingComponent,
    delay: 1000,
    serverSideRequirePath: "./modules/home/home-page",
    webpackRequireWeakId: () => require.resolveWeak("./modules/home/home-page"),
});

const ManageUsersPageLoadable = Loadable({
    loader: () => System.import("./modules/manage-users/manage-users-page"),
    LoadingComponent,
    delay: 1000,
    serverSideRequirePath: "./modules/manage-users/manage-users-page",
    webpackRequireWeakId: () => require.resolveWeak("./modules/manage-users/manage-users-page"),
});

const UserDetailsPageLoadable = Loadable({
    loader: () => System.import("./modules/user-details/user-details-page"),
    LoadingComponent,
    delay: 1000,
    serverSideRequirePath: "./modules/user-details/user-details-page",
    webpackRequireWeakId: () => require.resolveWeak("./modules/user-details/user-details-page"),
});

const App = () => {
    return (
        <Router history={createHistory()}>
            <div>
                <Route exact={true} path="/" component={HomePageLoadable} />
                <Route path="/manage-users" component={ManageUsersPageLoadable} />
                <Route path="/user-details/:id" component={UserDetailsPageLoadable} />
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("container"));
