import Sidebar from "./Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";
import { FitScreen } from "@mui/icons-material";


export const Account = ({userID}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [addressa, setAddressa] = useState('');
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [university, setuniversity] = useState('');
    const [faculty, setFaculty] = useState('');
    const [year, setYear] = useState('');

    const defaultInfo = [
        {
            firstName: "John",
            lastName: "John",
            phoneNumber: "John",
            birthDate: "John",
            address: "John",
            city: "John",
            county: "John",
            university: "John",
            faculty: "John",
            year: "John",
            studentId: 0,
        }
    ];

    const [information, setInformationArray] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        // 👇️ only runs once
        console.log('useEffect ran');
        let text1 = "http://localhost:8080/info/findInfoByStudentId/";
        let text2 = {userID}.userID;
        let req = text1.concat(text2);
        console.log(req);

        fetch(req)
        .then(res => res.json())
        .then((result)=>{setInformationArray(result);},[])

      }, []);

    const handleClick = (e) => {

    };

    const editInfo = (e) => {
        e.preventDefault();
        setIsDisabled(!isDisabled)
    };

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
                <form className = "account-details">
                {/* {information.map(i=>( */}
                    <Paper elevation={3} className="acc-details">

                        <label>First Name*</label>
                        <input disabled={isDisabled} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />

                        <label>Last Name*</label>
                        <input disabled={isDisabled} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />

                        <label>Phone Number*</label>
                        <input disabled={isDisabled} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                        <label>Birth Date</label>
                        <input disabled={isDisabled} value={birthDate} onChange={(e) => setBirthDate(e.target.value)} placeholder="dd.mm.yyyy" />

                        <label>Address</label>
                        <input disabled={isDisabled} value={addressa} onChange={(e) => setAddressa(e.target.value)} placeholder="Street Nr" />

                        <label>City</label>
                        <input disabled={isDisabled} value={city} onChange={(e) => setCity(e.target.value)} />

                        <label>County</label>
                        <input disabled={isDisabled} value={county} onChange={(e) => setCounty(e.target.value)} />

                        <label>University</label>
                        <input disabled={isDisabled} value={university} onChange={(e) => setuniversity(e.target.value)} />

                        <label>Faculty</label>
                        <input disabled={isDisabled} value={faculty} onChange={(e) => setFaculty(e.target.value)} />

                        <label>Year of study</label>
                        <input disabled={isDisabled} value={year} onChange={(e) => setYear(e.target.value)} />

                        <button onClick={editInfo}>Edit information</button>

                        <button onClick={handleClick}>Add information</button>

                    </Paper>
                {/* ))} */}
                </form>
                {/* <div className="account-details">
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
                </div> */}
            </div>
        </div>
    )
}