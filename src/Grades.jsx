import Sidebar from "./Components/Sidebar"
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";

export const  Grades = ({userID}) => {
    const [gradeArray, setGradeArray] = useState([]);


    function filterGrades(course){
        let text1 = "http://localhost:8080/grade/findByStudentId/";
        let text2 = {userID}.userID;
        let req = text1.concat(text2,"/",course);
        console.log(req);

        fetch(req)
        .then(res => res.json())
        .then((result)=>{setGradeArray(result);},[])
    }

    return (
        <div>
            <nav className="nav">
            <a href="/" className="home-title">Noodle</a>
            <ul>
                <li>
                    <a href="/account">{userID}</a>
                </li>
                <li>
                    <a href="/grades"></a>
                </li>
            </ul>
            </nav>
            <div className="content">
                <Sidebar/>
                <div className="paper-move-grade">
                    <button className="button-grade" onClick={() => filterGrades("IA")}>
                    AI
                    </button>
                    <button className="button-grade" onClick={() => filterGrades("PG")}>
                    PG
                    </button>
                    <button className="button-grade" onClick={() => filterGrades("PF")}>
                    PF
                    </button>
                    <button className="button-grade" onClick={() => filterGrades("IS")}>
                    IS
                    </button>
                    <button className="button-grade" onClick={() => filterGrades("SSC")}>
                    SSC
                    </button>
                    <button className="button-grade" onClick={() => filterGrades("PM")}>
                    PM
                    </button>
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