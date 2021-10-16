
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import TripDetailsPage from './pages/TripDetailsPage'
import LoginPage from './pages/LoginPage'

import HomePage from './pages/HomePage'
import CreateTripPage from './pages/CreateTripPage'
import AplicationFormPage from './pages/ApplicationFormPage'
import AdminHomePage from './pages/AdminHomePage'
import ListTripPage from "./pages/ListTripsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path= {"/"}>
            <HomePage/>
          </Route>
          <Route exact path= {"/ListTrip"}>
            <ListTripPage/>
          </Route>
          <Route exact path= {"/ListTrip/ApplicationForm"}>
            <AplicationFormPage/>
          </Route>
          <Route exact path= {"/Login"}>
            <LoginPage/>
          </Route>
          <Route exact path= {"/AdminHome"}>
            <AdminHomePage/>
          </Route>
          <Route exact path= {"/AdminHome/CreateTrip"}>
            <CreateTripPage/>
          </Route>
          <Route exact path= {"/AdminHome/TripDetails"}>
            <TripDetailsPage/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
