import Sidebar from "../Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";


export const QPG = ({userID}) => {

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

    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [question6, setQuestion6] = useState('');
    const [question7, setQuestion7] = useState('');
    const [question8, setQuestion8] = useState('');
    const [question9, setQuestion9] = useState('');
    const [question10, setQuestion10] = useState('');
    const [course, setCourse] = useState('');
    const [id, setID] = useState('');

    const [quizArray, setQuizArray] = useState([]);
    const [getQuiz, setgetQuiz] = useState(() =>{
        fetch("http://localhost:8080/quiz/findQuizByCourse/PG")
            .then(res => res.json())
            .then((result)=>{setQuizArray(result);},[])
    })

    const handleClickAdmin = (e) =>
    {
        
        e.preventDefault()
        const newQuiz={id, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, course}
        console.log(newQuiz)
        fetch("http://localhost:8080/quiz/addQuiz",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newQuiz)
        }).then(() => {console.log("New quiz added!")})
    }

     const IDUser = {userID}.userID;
    if(IDUser === 1)
    {
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
                    {quizArray.map(questions=>(
                        <Paper elevation={3} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={questions.id}>
                        <div>
                            <b>New Quiz:</b>
                        </div>
                        <form className = "quiz-form">
    
                            <label >Question 1: </label>
                            <br />
                            <input className="imput-form" value={question1} onChange={(e) => {setQuestion1(e.target.value); setCourse("PG")}}/>
    
                            <label >Question 2: </label>
                            <br />
                            <input className="imput-form" value={question2} onChange={(e) => setQuestion2(e.target.value)}/>
    
                            <label >Question 3: </label>
                            <br />
                            <input className="imput-form" value={question3} onChange={(e) => setQuestion3(e.target.value)}/>
    
                            <label >Question 4: </label>
                            <br />
                            <input className="imput-form" value={question4} onChange={(e) => setQuestion4(e.target.value)}/>
    
                            <label >Question 5: </label>
                            <br />
                            <input className="imput-form" value={question5} onChange={(e) => setQuestion5(e.target.value)}/>
    
                            <label >Question 6: </label>
                            <br />
                            <input className="imput-form" value={question6} onChange={(e) => setQuestion6(e.target.value)}/>
    
                            <label >Question 7: </label>
                            <br />
                            <input className="imput-form" value={question7} onChange={(e) => setQuestion7(e.target.value)}/>
    
                            <label >Question 8: </label>
                            <br />
                            <input className="imput-form" value={question8} onChange={(e) => setQuestion8(e.target.value)}/>
    
                            <label >Question 9: </label>
                            <br />
                            <input className="imput-form" value={question9} onChange={(e) => setQuestion9(e.target.value)}/>
    
                            <label >Question 10: </label>
                            <br />
                            <input className="imput-form" value={question10} onChange={(e) => setQuestion10(e.target.value)}/>
                            <button type="submit" onClick={handleClickAdmin}>Submit</button>
                        </form>
                        </Paper>
                         ))}
                    </div>
                </div>
            </div>
        )
    }else
    {
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
                    {quizArray.map(questions=>(
                        <Paper elevation={3} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={questions.id}>
                        <div>
                            <b>Quiz:</b>
                        </div>
                        <form className = "quiz-form">
    
                            <label >Question 1: </label>
                            <label >{questions.question1}</label>
                            <br />
                            <input className="imput-form" value={Q1} onChange={(e) => setQ1(e.target.value)}/>
    
                            <label >Question 2: </label>
                            <label >{questions.question2}</label>
                            <br />
                            <input className="imput-form" value={Q2} onChange={(e) => setQ2(e.target.value)}/>
    
                            <label >Question 3: </label>
                            <label >{questions.question3}</label>
                            <br />
                            <input className="imput-form" value={Q3} onChange={(e) => setQ3(e.target.value)}/>
    
                            <label >Question 4: </label>
                            <label >{questions.question4}</label>
                            <br />
                            <input className="imput-form" value={Q4} onChange={(e) => setQ4(e.target.value)}/>
    
                            <label >Question 5: </label>
                            <label >{questions.question5}</label>
                            <br />
                            <input className="imput-form" value={Q5} onChange={(e) => setQ5(e.target.value)}/>
    
                            <label >Question 6: </label>
                            <label >{questions.question6}</label>
                            <br />
                            <input className="imput-form" value={Q6} onChange={(e) => setQ6(e.target.value)}/>
    
                            <label >Question 7: </label>
                            <label >{questions.question7}</label>
                            <br />
                            <input className="imput-form" value={Q7} onChange={(e) => setQ7(e.target.value)}/>
    
                            <label >Question 8: </label>
                            <label >{questions.question8}</label>
                            <br />
                            <input className="imput-form" value={Q8} onChange={(e) => setQ8(e.target.value)}/>
    
                            <label >Question 9: </label>
                            <label >{questions.question9}</label>
                            <br />
                            <input className="imput-form" value={Q9} onChange={(e) => setQ9(e.target.value)}/>
    
                            <label >Question 10: </label>
                            <label >{questions.question10}</label>
                            <br />
                            <input className="imput-form" value={Q10} onChange={(e) => setQ10(e.target.value)}/>
                            <button type="submit">Submit</button>
                        </form>
                        </Paper>
                         ))}
                    </div>
                </div>
            </div>
        )
    }
}