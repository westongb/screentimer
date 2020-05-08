import React, {useState, useContext} from 'react';
import KidsPopup from './myKidsPopup';
import "./components.css";
import {LoginContext} from '../Components/LoginAuthentication/isAuthenticated';
export default function MyFamily(){



    const {user, setUser, loggedIn, setLoggedIn, token, writeToken, parent, setParent} = useContext(LoginContext);



    return(
        <div>
            <h1>My Kids</h1>
            <table>
                <tr>
                    <th>Family Member Name</th>
                    <th>Family Member Age</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Family Member Max Time</th>
                </tr>
                <tr>
                    <td>Test Name</td>
                    <td>Test Age</td>
                    <td>Test UserName</td>
                    <td>Test Password</td>
                    <td>Test Time</td>
                </tr>    
            </table>
            <KidsPopup/>
        </div>
    )
}