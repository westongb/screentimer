import React, {useState, useContext} from 'react';
import "./components.css";

export default function MyFamily(){







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
        </div>
    )
}