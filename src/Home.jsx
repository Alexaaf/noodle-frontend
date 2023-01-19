import Sidebar from "./Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const Home = ({userID}) => {

    const [goToIA, setGoToIA] = useState(false);
    const [goToPG, setGoToPG] = useState(false);
    const [goToIS, setGoToIS] = useState(false);
    const [goToSSC, setGoToSSC] = useState(false);
    const [goToPF, setGoToPF] = useState(false);
    const [goToPM, setGoToPM] = useState(false);

    const [goToQIS, setGoToQIS] = useState(false);
    const [goToQIA, setGoToQIA] = useState(false);
    const [goToQSSC, setGoToQSSC] = useState(false);
    const [goToQPG, setGoToQPG] = useState(false);
    const [goToQPF, setGoToQPF] = useState(false);
    const [goToQPM, setGoToQPM] = useState(false);

    if(goToIA)
    {
        return <Navigate to= "/inteligenta-artificiala" />
    }

    if(goToPG)
    {
        return <Navigate to= "/proiectare-grafica" />
    }

    if(goToIS)
    {
        return <Navigate to= "/ingineria-sistemelor" />
    }

    if(goToSSC)
    {
        return <Navigate to= "/sisteme-de-calcul" />
    }

    if(goToPF)
    {
        return <Navigate to= "/programare-functionala" />
    }

    if(goToPM)
    {
        return <Navigate to= "/programarea-microprocesoarelor" />
    }

    if(goToQIS)
    {
        return <Navigate to= "/quiz-is" />
    }

    if(goToQIA)
    {
        return <Navigate to= "/quiz-ia" />
    }

    if(goToQPG)
    {
        return <Navigate to= "/quiz-PG" />
    }
    if(goToQPM)
    {
        return <Navigate to= "/quiz-pm" />
    }
    if(goToQSSC)
    {
        return <Navigate to= "/quiz-ssc" />
    }
    if(goToQPF)
    {
        return <Navigate to= "/quiz-pf" />
    }

    const ID = {userID}.userID;

    if(ID === 1)
    {return (
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
                <div className="paper-move-course">
                    <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                        <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                            <b>Inteligenta artificiala</b> <br/> <br/>
                            Prof. Anca Marginean <br/>
                            2022/2023 - UTCN/AC
                        </Paper>
                        <div className="button-allign">
                            <button className="button-lecture" onClick={() => setGoToIA(true)}>
                                Edit Lecture
                            </button>
                            <button className="button-quiz" onClick={() => setGoToQIA(true)}>
                                Add Quiz
                            </button>
                        </div>
                    </Paper>
                    <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                        <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                            <b>Proiectare grafica</b> <br/> <br/>
                            Prof. Adrian Sabau <br/>
                            2022/2023 - UTCN/AC
                        </Paper>
                        <div className="button-allign">
                            <button className="button-lecture" onClick={() => setGoToPG(true)}>
                            Edit Lecture
                            </button>
                            <button className="button-quiz" onClick={() => setGoToQPG(true)}>
                            Add Quiz
                            </button>
                        </div>
                    </Paper>
                    <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                        <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                            <b>Ingineria Sistemelor</b> <br/> <br/>
                            Prof. Eneia Todoran <br/>
                            2022/2023 - UTCN/AC
                        </Paper>
                        <div className="button-allign">
                            <button className="button-lecture" onClick={() => setGoToIS(true)}>
                            Edit Lecture
                            </button>
                            <button className="button-quiz" onClick={() => setGoToQIS(true)}>
                            Add Quiz
                            </button>
                        </div>
                    </Paper>
                    <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                        <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                            <b>Structura Sistemelor de Calcul</b> <br/> <br/>
                            Prof. Florin Lisman <br/>
                            2022/2023 - UTCN/AC
                        </Paper>
                        <div className="button-allign">
                            <button className="button-lecture" onClick={() => setGoToSSC(true)}>
                            Edit Lecture
                            </button>
                            <button className="button-quiz" onClick={() => setGoToQSSC(true)}>
                            Add Quiz
                            </button>
                        </div>
                    </Paper>
                    <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                        <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                            <b>Programare Functionala</b> <br/> <br/>
                            Prof. Radu Slavescu <br/>
                            2022/2023 - UTCN/AC
                        </Paper>
                        <div className="button-allign">
                            <button className="button-lecture" onClick={() => setGoToPF(true)}>
                            Edit Lecture
                            </button>
                            <button className="button-quiz" onClick={() => setGoToQPF(true)}>
                            Add Quiz
                            </button>
                        </div>
                    </Paper>
                    <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                        <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                            <b>Programare cu microprocesoare</b> <br/> <br/>
                            Prof. Mihai Negru <br/>
                            2022/2023 - UTCN/AC
                        </Paper>
                        <div className="button-allign">
                            <button className="button-lecture" onClick={() => setGoToPM(true)}>
                            Edit Lecture
                            </button>
                            <button className="button-quiz" onClick={() => setGoToQPM(true)}>
                                Add Quiz
                            </button>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    )
    }else{
        if(ID != 0)
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
                            <a href="/grades"></a>
                        </li>
                    </ul>
                    </nav>
                    <div className="content">
                        <Sidebar/>
                        <div className="paper-move-course">
                            <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                                <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                                    <b>Inteligenta artificiala</b> <br/> <br/>
                                    Prof. Anca Marginean <br/>
                                    2022/2023 - UTCN/AC
                                </Paper>
                                <div className="button-allign">
                                    <button className="button-lecture" onClick={() => setGoToIA(true)}>
                                        Lecture
                                    </button>
                                    <button className="button-quiz" onClick={() => setGoToQIA(true)}>
                                        Quiz
                                    </button>
                                </div>
                            </Paper>
                            <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                                <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                                    <b>Proiectare grafica</b> <br/> <br/>
                                    Prof. Adrian Sabau <br/>
                                    2022/2023 - UTCN/AC
                                </Paper>
                                <div className="button-allign">
                                    <button className="button-lecture" onClick={() => setGoToPG(true)}>
                                        Lecture
                                    </button>
                                    <button className="button-quiz" onClick={() => setGoToQPG(true)}>
                                        Quiz
                                    </button>
                                </div>
                            </Paper>
                            <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                                <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                                    <b>Ingineria Sistemelor</b> <br/> <br/>
                                    Prof. Eneia Todoran <br/>
                                    2022/2023 - UTCN/AC
                                </Paper>
                                <div className="button-allign">
                                    <button className="button-lecture" onClick={() => setGoToIS(true)}>
                                        Lecture
                                    </button>
                                    <button className="button-quiz" onClick={() => setGoToQIS(true)}>
                                        Quiz
                                    </button>
                                </div>
                            </Paper>
                            <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                                <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                                    <b>Structura Sistemelor de Calcul</b> <br/> <br/>
                                    Prof. Florin Lisman <br/>
                                    2022/2023 - UTCN/AC
                                </Paper>
                                <div className="button-allign">
                                    <button className="button-lecture" onClick={() => setGoToSSC(true)}>
                                        Lecture
                                    </button>
                                    <button className="button-quiz" onClick={() => setGoToQSSC(true)}>
                                        Quiz
                                    </button>
                                </div>
                            </Paper>
                            <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                                <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                                    <b>Programare Functionala</b> <br/> <br/>
                                    Prof. Radu Slavescu <br/>
                                    2022/2023 - UTCN/AC
                                </Paper>
                                <div className="button-allign">
                                    <button className="button-lecture" onClick={() => setGoToPF(true)}>
                                        Lecture
                                    </button>
                                    <button className="button-quiz" onClick={() => setGoToQPF(true)}>
                                        Quiz
                                    </button>
                                </div>
                            </Paper>
                            <Paper elevation={6} style={{width:"33%", height:"237.5px", background:"black"}}>
                                <Paper elevation={6} style={{margin:"0px",padding:"47px",textAlign:"left"}}>
                                    <b>Programare cu microprocesoare</b> <br/> <br/>
                                    Prof. Mihai Negru <br/>
                                    2022/2023 - UTCN/AC
                                </Paper>
                                <div className="button-allign">
                                    <button className="button-lecture" onClick={() => setGoToPM(true)}>
                                        Lecture
                                    </button>
                                    <button className="button-quiz" onClick={() => setGoToQPM(true)}>
                                        Quiz
                                    </button>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Navigate to= "/login" />
        }
        
    }

}