import Sidebar from "./Components/Sidebar"
import { Paper } from "@mui/material"
import React, { useEffect, useState } from "react";
import { FitScreen } from "@mui/icons-material";


export const Account = ({userID}) => {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddressa] = useState('');
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [university, setuniversity] = useState('');
    const [faculty, setFaculty] = useState('');
    const [yearOfStudy, setYear] = useState('');
    const [studentId, setStudentId] = useState('');

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

    useEffect((e) => {
        // 👇️ only runs once
        //e.preventDefault()

        console.log('useEffect ran');
        let text1 = "http://localhost:8080/info/findInfoByStudentId/";
        let text2 = {userID}.userID;
        let req = text1.concat(text2);
        console.log(req);

        fetch(req)
        .then(res => res.json())
        .then((result)=>{setInformationArray(result);

            for( const x in information)
            {
                console.log(information[x].firstName);
            }

        },[])}, []);

    const handleClick = (e) => {

        e.preventDefault();
        setId({userID}.userID);
        const newInfo={id, firstName, lastName, phoneNumber, birthDate, address, city, county, university, faculty, yearOfStudy, studentId}
        console.log(newInfo)

        fetch("http://localhost:8080/info/addInfo",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newInfo)
        }).then(() => {console.log("info updated!")})

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
                    <a href="/grades"></a>
                </li>
            </ul>
            </nav>
            <div className="account-content">
                <Sidebar/>
                <form className = "account-details">
                 {information.map(i=>( 
                    <Paper elevation={3} className="acc-details">

                        <label>First Name*</label>
                        <input disabled={isDisabled} value={firstName} onChange={(e) => {setFirstName(e.target.value); setId(i.id); setStudentId(i.studentId) }} placeholder={i.firstName} />

                        <label>Last Name*</label>
                        <input disabled={isDisabled} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={i.lastName} />

                        <label>Phone Number*</label>
                        <input disabled={isDisabled} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={i.phoneNumber}/>

                        <label>Birth Date</label>
                        <input disabled={isDisabled} value={birthDate} onChange={(e) => setBirthDate(e.target.value)} placeholder={i.birthDate} />

                        <label>Address</label>
                        <input disabled={isDisabled} value={address} onChange={(e) => setAddressa(e.target.value)} placeholder={i.address} />

                        <label>City</label>
                        <input disabled={isDisabled} value={city} onChange={(e) => setCity(e.target.value)} placeholder={i.city}/>

                        <label>County</label>
                        <input disabled={isDisabled} value={county} onChange={(e) => setCounty(e.target.value)} placeholder={i.county}/>

                        <label>University</label>
                        <input disabled={isDisabled} value={university} onChange={(e) => setuniversity(e.target.value)} placeholder={i.university}/>

                        <label>Faculty</label>
                        <input disabled={isDisabled} value={faculty} onChange={(e) => setFaculty(e.target.value)} placeholder={i.faculty} />

                        <label>Year of study</label>
                        <input disabled={isDisabled} value={yearOfStudy} onChange={(e) => setYear(e.target.value)} placeholder={i.yearOfStudy}/>

                        <button onClick={editInfo}>Edit information</button>

                        <button onClick={handleClick}>Add information</button>

                    </Paper>
                 ))} 
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