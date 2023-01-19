import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';


export const Login = ({setUserID}) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass]= useState('');
    const [userArray, setUserArray] = useState([]);
    const [goToRegister, setGoToRegister] = useState(false);
    const [goToHome, setGoToHome] = useState(false);
    const [response, setResponse] = useState(null);


    if(goToRegister)
    {
        return <Navigate to= "/register" />
    }

    if(goToHome)
    {
        return <Navigate to= "/home" />
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const validAccount = (e) => {

        let text1 = "http://localhost:8080/user/findByEmail/";
        let text2 = {email}.email;
        let text3 = {password}.password;
        let req = text1.concat(text2, "/", text3);
        console.log(req);

        fetch(req)
        .then(res => res.json())
        .then((result)=>{setResponse(result);},[])
        console.log(response);

        console.log(response.email);
        if(response.email === email && response.password === password)
        {
            console.log("esti aici");
            setUserID(response.id);
            setGoToHome(true);
        }
        
        console.log("Contul nu e valid");
        return false;
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className = "login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit" onClick={validAccount}>Log In</button>
            </form>
            <button className = "link-btn" onClick={() => setGoToRegister(true)}>Sign Up</button>
        </div>
    )
}