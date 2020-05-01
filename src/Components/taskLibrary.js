import React, {useState, useContext, useEffect} from 'react';
import "./components.css";
import TransitionsModal from "./taskPopup";


export default function TaskLibrary(){

    useEffect(() => {
        getTasks({})
    },[]);

    const [tasks, setTasks] = useState()

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

    let taskList;
    let taskName;
    let assignedFamilyMember;
    let taskRequired;
    let taskMaxTime;
    let taskTime;

    if(tasks != null){
        taskList = tasks.map((item, i) => {
           taskName = item.Name;
           assignedFamilyMember = item.Family_Member;
            taskRequired = item.Required;
            taskMaxTime= item.Max_Time;
            taskTime = item.Time;
       
       
           return(
           <tr>
               <td>{taskName}</td>
               <td>{assignedFamilyMember}</td>
                <td>{taskRequired}</td>
                <td>{taskMaxTime}</td>
                <td>{taskTime}</td>
           </tr>
           )
       
       
       })
       
       }



    return(
        <div>
            <h1>Task Library</h1>
            <table>
                <tr>
                    <th>Task Name</th>
                    <th>Family Member</th>
                    <th>Required</th>
                    <th>Time Earned</th>
                    <th>Max Time/Day</th>
                </tr>
               {taskList}
            </table>
            <TransitionsModal/>
        </div>

    )
}