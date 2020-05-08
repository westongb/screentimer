import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from "react-router-dom";

import './App.css';
import MenuBar from "./Components/menuBar";
import {LoginProvider} from './Components/LoginAuthentication/isAuthenticated';

function App() {
  return (
    <div className="App">
      <LoginProvider>
      <MenuBar/>
      </LoginProvider>
      
    </div>
  );
}

export default App;
