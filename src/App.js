import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { Home } from "./Home";
import { Grades } from "./Grades";
import { Account } from "./Account";
import { IA } from "./IA";
import { PG } from "./PG";
import { IS } from "./IS";
import { PM } from "./PM";
import { PF } from "./PF";
import { SSC } from "./SSC";

import {QIS} from "./Quiz/QIS";
import {QIA} from "./Quiz/QIA";
import {QPG} from "./Quiz/QPG";
import {QSSC} from "./Quiz/QSSC";
import {QPF} from "./Quiz/QPF";
import {QPM} from "./Quiz/QPM";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const[userID, setUserID] = useState(0);
  const[studentID, setStudentID] = useState(0);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home userID={userID} />} />
          <Route path="/login" element={<Login setUserID={setUserID} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/grades" element={<Grades userID={userID} />} />
          <Route path="/account" element={<Account userID={userID}/>} />
          <Route path="/inteligenta-artificiala" element={<IA />} />
          <Route path="/proiectare-grafica" element={<PG />} />
          <Route path="/ingineria-sistemelor" element={<IS />} />
          <Route path="/programarea-microprocesoarelor" element={<PM />} />
          <Route path="/sisteme-de-calcul" element={<SSC />} />
          <Route path="/programare-functionala" element={<PF />} />
          <Route path="/quiz-is" element={<QIS userID={userID} />} />
          <Route path="/quiz-ia" element={<QIA userID={userID} />} />
          <Route path="/quiz-ssc" element={<QSSC userID={userID} />} />
          <Route path="/quiz-pg" element={<QPG userID={userID} />} />
          <Route path="/quiz-pm" element={<QPM userID={userID} />} />
          <Route path="/quiz-pf" element={<QPF userID={userID} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
