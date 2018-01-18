import {Router, Route,Switch} from  'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import RegisterForm from '../components/RegisterPage';

export const history=createHistory();

const AppRouter=()=>(
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path ="/register" component={RegisterForm} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>    
);
export default AppRouter;