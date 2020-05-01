import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from "react-router-dom";
import {LoginContext } from "./isAuthenticated";

export default function LoginScreen(){


const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const {user, setUser, loggedIn, setLoggedIn, token, writeToken} = useContext(LoginContext);

const veryifyLogin= (res, props) => {
    fetch(`http://localhost:5000/login/${userName}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            userName: userName,
            password: password
        })
        
    }).then(  
        res => res.json()
    ).then(
        function (data) {
            if(data.userName=== 'Incorrect User Name'){
                window.alert("Incorrect User Name or Password")
            } else {
                if(data.password === 'Incorrect password') {
                    window.alert("Incorrect User Name or Password")
                } else{
               setUser(userName)
            //    writeToken(data.TokenAuth)
               setLoggedIn(true)
            //    routeChange()
            }
        }
        }
    )
}



const submitHandler = (event) =>{
    event.preventDefault()
    // veryifyLogin(event)
}

// let history = useHistory();
// let path = `/`;

//  function routeChange() {
//     history.push(path);
//   }



return (
    <div className='loginBox'>
        <h1>Login</h1>
        <br></br>
            <form className='loginForm' onSubmit={submitHandler}>
            <div className="formInput">
             <label>Username/Email Address</label>
             <input type='text' value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
             </div>
             <br></br>
             <div className="formInput">
            <label>Password </label>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        </div>
        <br></br>
        <button>Login</button>
    </form>
    <br></br>
    <button><Link to="/login/CreateUser" className='menuLink'>CreateUser</Link></button>
    </div>
    

    )
}