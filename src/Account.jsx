import Sidebar from "./Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";


export const Account = (props) => {
    const [student, setStudent] = useState([]);

    return (
        <div>
            <nav className="nav">
            <a href="/" className="home-title">Noodle</a>
            <ul>
                <li>
                    <a href="/account">Account</a>
                </li>
                <li>
                    <a href="/grades">Grades</a>
                </li>
            </ul>
            </nav>
            <div className="account-content">
                <Sidebar/>
                <div className="account-details">
                    <Paper elevation={3} style={{margin:"10px",padding:"15px",textAlign:"left"}}>
                        First Name: Aldea<br/>
                        Last Name: Ovidiu-Alexandru<br/>
                        Phone: 0775456901 <br/>
                        <br/>
                        Birthdate: 23.05.2002 <br/>
                        Address: Observator 16 <br/>
                        City: Cluj-Napoca <br/>
                        County: Cluj <br/>
                        <br />
                        University: UTCN <br/>
                        Faculty: Automation and computers <br/>
                        Year of study: 3 <br/>
                        <br/>
                    </Paper>
                </div>
            </div>
        </div>
    )
}