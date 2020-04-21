import React, {useState, useContext} from 'react';
import "./components.css";


export default function MyAccount(){

    const [userFullName, setFullName] = useState("Weston")
    const [userName, setUserName] = useState("Westongb")
    const [password, setPassword] = useState("Abc123890")

    return(
        <div>
            <h1>My Account</h1>
            <br/>
            <div className="formDisplayItem">
                <span><p>Name:</p></span>
                 <span><p>{userFullName}</p></span>
                 <button><p>Edit</p></button>
            </div>
            <div className="formDisplayItem">
                <span><p>User Name:</p></span>
                 <span><p>{userName}</p></span>
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