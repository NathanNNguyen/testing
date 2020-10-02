import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch
} from "react-router-dom";
import axios from "axios";

import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Login from "./components/Login";
import Home from "./components/Home";

import "antd/dist/antd.less";
import "./index.css";

import { NotFoundPage } from "./components/pages/NotFound";
import { ExampleListPage } from "./components/pages/ExampleList";
import { ProfileListPage } from "./components/pages/ProfileList";
import { LoginPage } from "./components/pages/Login";
import { HomePage } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { ExampleDataViz } from "./components/pages/ExampleDataViz";
import { DataViz } from "./components/pages/DataViz";
import { config } from "./utils/oktaConfig";
import { LoadingComponent } from "./components/common";

import { CityContext } from "./contexts/CityContext";

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
  const [cities, setCities] = useState([]);
  const [comparisonList, setComparisonList] = useState([]);
  const [housing, setHousing] = useState([]);
  const [weather, setWeather] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [isComparing, setIsComparing] = useState(false);
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.

  const baseURL =
    "http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com";
  const history = useHistory();

  useEffect(() => {
    getCityData();
    getHousingData();
    getWeatherData();
    getJobsData();
  }, []);

  useEffect(() => {
    checkComparisonListLength();
  }, [comparisonList]);

  const checkComparisonListLength = () => {
    if (comparisonList.length === 0) {
      setIsComparing(false);
    }
  };

  const getCityData = () =>
    axios
      .get("https://citrics-c-api.herokuapp.com/cities")
      .then(res => {
        setCities(res.data);
      })
      .catch(err => console.log(err));

  const getHousingData = () =>
    axios
      .get(`${baseURL}/housing`)
      .then(res => {
        setHousing(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const getJobsData = () =>
    axios
      .get(`${baseURL}/jobs`)
      .then(res => {
        setJobs(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const getWeatherData = () =>
    axios
      .get(`${baseURL}/weather`)
      .then(res => {
        setWeather(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const getData = str => {
    const s = str.charAt(str.length - 2) + str.charAt(str.length - 1);
    try {
      setComparisonList([
        ...comparisonList,
        {
          // this doesn't seem to be finding city image
          city: str,
          image: cities.find(city => (city.location = str)).image,
          housing: housing[s][str],
          weather: weather[s][str].summer.MaxTempF,
          jobs: jobs[s]["Total Manufacturing"]
        }
      ]);
      setIsComparing(true);
    } catch (err) {
      console.log(err);
    }
  };

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push("/login");
  };

  const addCity = key => {
    setComparisonList(oldArray => [...oldArray, key]);
  };

  const removeCity = idx => {
    setComparisonList(
      comparisonList.filter((value, index) => {
        return idx !== index;
      })
    );
  };

  function onAuthRequired() {
    history.push("/login");
  }

  return (
    // <Security {...config} onAuthRequired={authHandler}>
    <CityContext.Provider
      value={{
        cities,
        comparisonList,
        setComparisonList,
        addCity,
        removeCity,
        isComparing,
        setIsComparing,
        getData
      }}
    >
      <Switch>
        <Security
          issuer="https://dev-783756.okta.com/oauth2/default"
          clientId="0oazj0xl0ZxIKVnSR4x6"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          {/* <Route path="/login" component={LoginPage} /> */}
          {/* <Route path="/implicit/callback" component={LoginCallback} /> */}
          {/* any of the routes you need secured should be registered as SecureRoutes */}
          <Route path="/" exact={true} component={Home} />
          <SecureRoute
            path="/home"
            exact
            component={() => <HomePage LoadingComponent={LoadingComponent} />}
          />

          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-783756.okta.com" />}
          />
          <Route path="/implicit/callback" component={LoginCallback} />

          <SecureRoute path="/about" exact={true} component={About} />
          <Route path="/example-list" component={ExampleListPage} />
          <Route path="/profile-list" component={ProfileListPage} />
          <Route path="/dataviz" component={DataViz} />
          {/* <Route component={NotFoundPage} /> */}
        </Security>
      </Switch>
    </CityContext.Provider>
    // </Security>
  );
}
