import Sidebar from "../Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";


export const QPF = (props) => {

    const [Q1, setQ1] = useState('');
    const [Q2, setQ2] = useState('');
    const [Q3, setQ3] = useState('');
    const [Q4, setQ4] = useState('');
    const [Q5, setQ5] = useState('');
    const [Q6, setQ6] = useState('');
    const [Q7, setQ7] = useState('');
    const [Q8, setQ8] = useState('');
    const [Q9, setQ9] = useState('');
    const [Q10, setQ10] = useState('');

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
                    <div>
                        <b>Quiz:</b>
                    </div>
                    <form className = "quiz-form">

                        <label >Question 1: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q1} onChange={(e) => setQ1(e.target.value)}/>

                        <label >Question 2: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q2} onChange={(e) => setQ2(e.target.value)}/>

                        <label >Question 3: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q3} onChange={(e) => setQ3(e.target.value)}/>

                        <label >Question 4: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q4} onChange={(e) => setQ4(e.target.value)}/>

                        <label >Question 5: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q5} onChange={(e) => setQ5(e.target.value)}/>

                        <label >Question 6: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q6} onChange={(e) => setQ6(e.target.value)}/>

                        <label >Question 7: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q7} onChange={(e) => setQ7(e.target.value)}/>

                        <label >Question 8: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q8} onChange={(e) => setQ8(e.target.value)}/>

                        <label >Question 9: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q9} onChange={(e) => setQ9(e.target.value)}/>

                        <label >Question 10: </label>
                        <label >Cine are pula mare?</label>
                        <br />
                        <input className="imput-form" value={Q10} onChange={(e) => setQ10(e.target.value)}/>
                        <button type="submit">Submit</button>
                    </form>
                    </Paper>
                </div>
            </div>
        </div>
    )
}