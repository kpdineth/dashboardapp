import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import MyPosts from '../pages/MyPosts/MyPosts';
import Signup from '../pages/Signup/Signup';
export default function Routes() {
    return (
        <Router>
            <div>
                {/* <Header /> */}

                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/myposts">
                        <MyPosts />
                    </Route>
                    {/* <Route path="*">
                        <NoMatch />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    )
}
