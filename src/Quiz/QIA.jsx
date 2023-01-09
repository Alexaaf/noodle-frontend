import Sidebar from "../Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useState } from "react";


export const QIA = ({userID}) => {

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

    const [answerId, setAnswerId] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [answer8, setAnswer8] = useState('');
    const [answer9, setAnswer9] = useState('');
    const [answer10, setAnswer10] = useState('');

    const [course, setCourse] = useState('');

    const [id, setID] = useState('');
    const [quizId, setQuizID] = useState('');


    const [quizArray, setQuizArray] = useState([]);
    const [getQuiz, setgetQuiz] = useState(() =>{
        fetch("http://localhost:8080/quiz/findQuizByCourse/IA")
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
        
        addAnswers();
    }

    function addAnswers(){

        fetch("http://localhost:8080/quiz/getLastQuiz")
            .then(resId => resId.json())
            .then((resultID)=>{setQuizID(resultID)})
        
        
        setQuizID(quizId + 1);
        console.log({quizId});
        

        const newAnswerSet={id, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, quizId}
        console.log(newAnswerSet)
        fetch("http://localhost:8080/answers/addAnswers",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newAnswerSet)
        }).then(() => {console.log("New Answers added!")})
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
                        <a href="/account">{userID}</a>
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
                            <input className="imput-form" value={question1} placeholder="Question" onChange={(e) => {setQuestion1(e.target.value); setCourse("IA")}}/>
                            <input className="imput-form" value={answer1} placeholder="Answer" onChange={(e) => {setAnswer1(e.target.value)}}/>
                            <label >Question 2: </label>
                            <br />
                            <input className="imput-form" value={question2} placeholder="Question" onChange={(e) => setQuestion2(e.target.value)}/>
                            <input className="imput-form" value={answer2} placeholder="Answer" onChange={(e) => {setAnswer2(e.target.value)}}/>
                            <label >Question 3: </label>
                            <br />
                            <input className="imput-form" value={question3} placeholder="Question" onChange={(e) => setQuestion3(e.target.value)}/>
                            <input className="imput-form" value={answer3} placeholder="Answer" onChange={(e) => {setAnswer3(e.target.value)}}/>
                            <label >Question 4: </label>
                            <br />
                            <input className="imput-form" value={question4} placeholder="Question" onChange={(e) => setQuestion4(e.target.value)}/>
                            <input className="imput-form" value={answer4} placeholder="Answer" onChange={(e) => {setAnswer4(e.target.value)}}/>
                            <label >Question 5: </label>
                            <br />
                            <input className="imput-form" value={question5} placeholder="Question" onChange={(e) => setQuestion5(e.target.value)}/>
                            <input className="imput-form" value={answer5} placeholder="Answer" onChange={(e) => {setAnswer5(e.target.value)}}/>
                            <label >Question 6: </label>
                            <br />
                            <input className="imput-form" value={question6} placeholder="Question" onChange={(e) => setQuestion6(e.target.value)}/>
                            <input className="imput-form" value={answer6} placeholder="Answer" onChange={(e) => {setAnswer6(e.target.value)}}/>
                            <label >Question 7: </label>
                            <br />
                            <input className="imput-form" value={question7} placeholder="Question" onChange={(e) => setQuestion7(e.target.value)}/>
                            <input className="imput-form" value={answer7} placeholder="Answer" onChange={(e) => {setAnswer7(e.target.value)}}/>
                            <label >Question 8: </label>
                            <br />
                            <input className="imput-form" value={question8} placeholder="Question" onChange={(e) => setQuestion8(e.target.value)}/>
                            <input className="imput-form" value={answer8} placeholder="Answer" onChange={(e) => {setAnswer8(e.target.value)}}/>
                            <label >Question 9: </label>
                            <br />
                            <input className="imput-form" value={question9} placeholder="Question" onChange={(e) => setQuestion9(e.target.value)}/>
                            <input className="imput-form" value={answer9} placeholder="Answer" onChange={(e) => {setAnswer9(e.target.value)}}/>
                            <label >Question 10: </label>
                            <br />
                            <input className="imput-form" value={question10} placeholder="Question" onChange={(e) => setQuestion10(e.target.value)}/>
                            <input className="imput-form" value={answer10} placeholder="Answer" onChange={(e) => {setAnswer10(e.target.value)}}/>
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
                        <a href="/account">{userID}</a>
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