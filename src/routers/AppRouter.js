// import {BrowserRouter, Route,Switch,Link,NavLink} from  'react-router-dom';
import {Router, Route,Switch,Link,NavLink} from  'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from "./PrivateRoute";
import PublicRoute  from './PublicRoute';

export const history=createHistory();

const AppRouter=()=>(
    // <BrowserRouter>
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path ="/dashboard" component={DashboardPage} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>    
    // </BrowserRouter>
);
export default AppRouter;