import Sidebar from "./Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";


export const IA = (props) => {

    return (
        <div>
            <nav className="nav">
            <a href="/" className="home-title">Noodle</a>
            <ul>
                <li>
                    <a href="/account"></a>
                </li>
                <li>
                    <a href="/grades"></a>
                </li>
            </ul>
            </nav>
            <div className="account-content">
                <Sidebar/>
                <div className="account-details">
                    <Paper elevation={3} style={{margin:"10px",padding:"15px",textAlign:"left"}}>
                    Inteligenta artificiala (IA) este un domeniu al informaticii care se concentreaza pe dezvoltarea de sisteme capabile sa efectueze activitati care, in mod normal, necesita inteligenta umana, cum ar fi invatarea, rezolvarea problemelor, intelegerea limbajului natural si perceperea mediului. <br /> <br />
                    Exista mai multe tipuri de inteligenta artificiala, cum ar fi:
                    <br /> <br />
                    IA de tip rule-based, care se bazeaza pe reguli predefinite pentru a lua decizii;
                    <br />

                    IA de tip invatare automata, care se bazeaza pe invatarea prin exemplu si poate fi impartita in doua categorii: invatare supervisata si invatare nesupervisata.                    <br />

                    IA de tip expert, care se bazeaza pe cunostintele acumulate de un expert in domeniu pentru a lua decizii;                    <br />

                    Invatarea supervisata implica prezentarea sistemului cu exemple etichetate, astfel incat acesta sa poata invata sa faca corelatii intre intrari si iesiri. De exemplu, un sistem de recunoastere a imaginilor poate fi antrenat cu exemple de imagini etichetate cu ceea ce reprezinta imaginea.
                    Invatarea nesupervisata implica prezentarea sistemului cu date brute, fara etichete, iar sistemul trebuie sa descopere modele si structuri ascunse in date.                    <br />
                    <br /> <br />
                    IA se poate aplica in multe domenii, cum ar fi: jocuri, recunoasterea vorbirii, procesarea limbajului natural, conducerea autonoma a vehiculelor, diagnosticarea medicala si multe altele.                    <br />
                    <br />
                    IA se bazeaza pe algoritmi si tehnici specifice, cum ar fi:<br />
                    Algoritmi de invatare automata, cum ar fi algoritmul de retea neurala sau algoritmul de arbore de decizie;
Tehnici de procesare a limbajului natural, cum ar fi analiza morfologica si sintactica;
Tehnici de percepere, cum ar fi recunoasterea obiectelor si a fetei;
Pentru a dezvolta un sistem IA, este necesar sa se urmeze anumiti pasi, cum ar fi:<br />
Definirea problemei si a obiectivelor;
Colectarea si prelucrarea datelor;
Antrenarea si evaluarea algoritmilor;
Implementarea si intretinerea sistemului.
IA este un domeniu in continua evolutie si poate oferi solutii importante pentru o varietate de probleme. Este important sa se ia in considerare si aspectele etice si de securitate atunci cand se dezvolta si se implementeaza sisteme IA. <br /> <br />

                    <a href="https://zoo.cs.yale.edu/classes/cs470/materials/aima2010.pdf">Aima-PDF</a>
                    </Paper>
                </div>
            </div>
        </div>
    )
}