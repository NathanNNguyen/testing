import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch
} from "react-router-dom";
// import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Login from './components/Login'
import Staff from './components/Staff'
import Home from './components/Home'

import "antd/dist/antd.less";
import "./index.css";

import { NotFoundPage } from "./components/pages/NotFound";
import { ExampleListPage } from "./components/pages/ExampleList";
import { ProfileListPage } from "./components/pages/ProfileList";
import { LoginPage } from "./components/pages/Login";
import { HomePage } from "./components/pages/Home";
import { ExampleDataViz } from "./components/pages/ExampleDataViz";
import { config } from "./utils/oktaConfig";
import { LoadingComponent } from "./components/common";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push("/login");
  };

  function onAuthRequired() {
    history.push('/login')
  }

  return (
    // <Security {...config} onAuthRequired={authHandler}>
    <Switch>
      <Security issuer='https://auth.lambdalabs.dev/oauth2/default'
        clientId='0oavso7p45Q1PRKSk4x6'
        redirectUri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired} >

        {/* <Route path="/login" component={LoginPage} /> */}
        {/* <Route path="/implicit/callback" component={LoginCallback} /> */}
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <Route path='/' exact={true} component={Home} />
        <SecureRoute
          path="/home"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path='/staff' exact={true} component={Staff} />
        <Route path='/login' render={() => <Login baseUrl='https://auth.lambdalabs.dev' />} />
        <Route path='/implicit/callback' component={LoginCallback} />

        <Route path="/example-list" component={ExampleListPage} />
        <Route path="/profile-list" component={ProfileListPage} />
        <Route path="/datavis" component={ExampleDataViz} />
        {/* <Route component={NotFoundPage} /> */}

      </Security>


    </Switch>
    // {/* // </Security> */}
  );
}
