import Sidebar from "./Components/Sidebar"
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Paper } from "@mui/material";

export const  Grades = (props) => {
    const [gradeArray, setGradeArray] = useState([]);


    useEffect(() => {
        
        fetch("http://localhost:8080/grade/allGrades")
        .then(res => res.json())
        .then((result)=>{setGradeArray(result);},[])
    })

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
            <div className="content">
                <Sidebar/>
                <div className="paper-move">
                    {gradeArray.map(grades=>(
                        <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={grades.id}>
                            Course: {grades.course}<br/>
                            Grade: {grades.grade}<br/>
                            Date: {grades.date}
                        </Paper>

                    ))}
                </div>
            </div>

        </div>
    )
}