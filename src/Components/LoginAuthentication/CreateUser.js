import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function CreateUser(){


const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [password, setPassword] = useState('');
const [emailAddress, setEmailAddress] = useState('');
const [userName, setUserName] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [isParent, setIsParent] = useState('false');
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18'));



let nowDate = Date.now();
let adultBirthDate =  nowDate - 5.676e+11;

const [age, setAge] = useState((adultBirthDate - selectedDate)/3.17098e-11)

// var date = new Date(age); // Date 2011-05-09T06:08:45.178Z
// var year = date.getFullYear();
// var month = ("0" + (date.getMonth() + 1)).slice(-2);
// var day = ("0" + date.getDate()).slice(-2);
    
// console.log(`${year}-${month}-${day}`); // 2011-05-09

console.log(selectedDate)

const handleDateChange = (date) => {
    setSelectedDate(date);
  };

function postUser(res){
    fetch("http://localhost:5000/UserInfo/new", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            EmailAddress: emailAddress,
            UserName: userName,
            Password: confirmPassword,
            Parent: isParent
        })
        
    }).then(
        res=> console.log("this Worked")
    )
}

function submitHandler(event) {
    event.preventDefault();
    setIsParent(true);
    postUser(event);
}


return (
    <div className='loginBox'>
        <h1>Create User</h1>
        <br></br>
            <form className='loginForm' onSubmit={submitHandler}>
            <label>First Name<abbr title="This field is mandatory" aria-label="required">*</abbr></label>
             <input type='text' value={firstName} onChange={(e)=> setFirstName(e.target.value)} required></input>
             <label>Last Name<abbr title="This field is mandatory" aria-label="required">*</abbr></label>
             <input type='text' value={lastName} onChange={(e)=> setLastName(e.target.value)} required></input>
             <br></br>
             <label>Email Address<abbr title="This field is mandatory" aria-label="required">*</abbr></label>
             <input type='email' value={emailAddress} onChange={(e)=> setEmailAddress(e.target.value)} required></input>
             <br></br>
             <label>UserName<abbr title="This field is mandatory" aria-label="required">*</abbr></label>
             <input type='text' value={userName} onChange={(e)=> setUserName(e.target.value)} required></input>
             <br></br>
            <label>Password <abbr title="This field is mandatory" aria-label="required">*</abbr></label>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
            <br></br>
            <label>Confirm Password<abbr title="This field is mandatory" aria-label="required">*</abbr> </label>
        <input type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required></input>
        <br></br>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Birth Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         </Grid>
        </MuiPickersUtilsProvider>
        <button>Submit</button>
    </form>
    </div>
)
}