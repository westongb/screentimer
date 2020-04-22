import React, {useState, useContext} from 'react';
import "./components.css";
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
import MainPage from './mainPage';
import LoginScreen from "./LoginAuthentication/Login";
import CreateUser from "./LoginAuthentication/CreateUser";
import AccountScreen from "./accountScreen";
import CountDownTimer from "./countdownTimer";

export default function MenuBar(){
    return(
        <Router>
            <div className="menuBar">
            <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/myaccount">My Account</Link>
            </nav>
            </div>

            <Route path="/myaccount" exact component={AccountScreen}/>
            <Route path="/login/createuser" exact component={CreateUser}/>
            <Route path="/" exact component={MainPage}/>
            <Route path="/login" exact component={LoginScreen}/>
            <Route path="/timer" exact component={CountDownTimer}/>
        </Router>
    )
}
