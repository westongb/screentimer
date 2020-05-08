import React, {useState, useContext} from 'react';
import {LoginContext} from '../Components/LoginAuthentication/isAuthenticated';
import "./components.css";


export default function MyAccount(){

    const {user,setUser, loggedIn, setLoggedIn, token, writeToken, parent, setParent,firstName, setFirstName, lastName, setLastName, email, setEmail} = useContext(LoginContext);
    return(
        <div>
            <h1>My Account</h1>
            <br/>
            <div className="formDisplayItem">
                <span><p>First Name:</p></span>
                 <span><p>{firstName}</p></span>
                 <button><p>Edit</p></button>
            </div>
            <div className="formDisplayItem">
                <span><p>Last Name:</p></span>
                 <span><p>{lastName}</p></span>
                 <button><p>Edit</p></button>
            </div>
            <div className="formDisplayItem">
                <span><p>User Name:</p></span>
                 <span><p>{user}</p></span>
                 <button><p>Edit</p></button>
            </div>
            <div className="formDisplayItem">
                <span><p>Password:</p></span>
                 <span><p type="password">**********</p></span>
                 <button><p>Edit</p></button>
            </div>
            
        </div>
    )
}