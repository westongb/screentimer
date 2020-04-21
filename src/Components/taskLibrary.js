import React, {useState, useContext} from 'react';
import "./components.css";


export default function TaskLibrary(){

    return(
        <div>
            <h1>Task Library</h1>
            <table>
                <tr>
                    <th>Task Name</th>
                    <th>Time Earned</th>
                    <th>Max Time/Day</th>
                </tr>
                <tr>
                    <td>Lexia</td>
                    <td>15</td>
                    <td>15</td>
                </tr>
            </table>
        </div>

    )
}