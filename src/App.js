import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Booking from './components/Dashboard/Booking/Booking';
import AddService from './components/Dashboard/AddService/AddService';
import Login from './components/Home/Login/Login'
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/service/:id">
          <Booking/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/addService">
        <AddService/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/bookingList">
          <BookingList/>
        </Route>
        <Route path="/addReview">
          <AddReview/>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
