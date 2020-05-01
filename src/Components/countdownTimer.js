import React, {useState, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuBar from "./menuBar";
import "./components.css";
 



export default function CountDownTimer(){

    useEffect(() => {
        getTasks({})
    },[]);


const [time, setTime] = useState(0)
const [tasks, setTasks] =useState()
const completedTasks = []
const [displayTime, setDisplayTime] = useState(0)
const earnedTime = []


function getTasks(res){
    fetch("http://localhost:5000/tasks/get", {
        method: "GET"
    })
    .then((res)=> { return res.json();
    })
    .then((res) =>{
        setTasks(res)
        return console.log(res)
    },
    // (error) => {
    //     setClasses("error")
    // }
    )
}

let createButtons;
let taskList;
let taskName;
let assignedFamilyMember;
let taskRequired;
let taskMaxTime;
let taskTime;

function clickedButton (name){
    earnedTime.push(15)
    completedTasks.push(name)
    console.log(earnedTime)
    console.log(completedTasks)
}


if(tasks != null){
 createButtons = tasks.map((item, i) => {
    taskName = item.Name;
    assignedFamilyMember = item.Family_Member;
    taskRequired = item.Required;
    taskMaxTime= item.Max_Time;
    taskTime = item.Time;


    return(
    <button onClick={() => clickedButton(taskName) }>{taskName}</button>
    )


})

}



    return(
        <div>
    
                <body>
                <div className="timer">
                    <div className="timer__controls">
                    {/* <button onClick={()=> addTime(20)} className="timer__button">20 Secs</button>
                    <button onClick={()=> addTime(300)} className="timer__button">Work 5</button>
                    <button  onClick={()=> addTime(900)} className="timer__button">Quick 15</button>
                    <button  onClick={()=> addTime(1200)} className="timer__button">Snack 20</button>
                    <button  onClick={()=> addTime(3600)} className="timer__button">Lunch Break</button> */}
                    {createButtons}
                    <form name="customForm" id="custom">
                        <input type="text" name="minutes" placeholder="Enter Minutes"/>
                    </form>
                    </div>
                    <div class="display">
                    <h1 class="display__time-left"></h1>
                    <p class="display__end-time"></p>
                    </div>
                </div>

                <script src="FINISHED"></script>
                </body>
        </div>
    )

}