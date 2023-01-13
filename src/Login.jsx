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
        
        fetch("http://localhost:8080/user/all")
        .then(res => res.json())
        .then((result)=>{setUserArray(result);},[])
        console.log(userArray);

        for(const x in userArray)
        {
            if(userArray[x].email === email)
            {
                if(userArray[x].password === password)
                {
                    console.log("Bine coaiee");
                    console.log(userArray[x].id);
                    setUserID(userArray[x].id);
                    console.log("Am trimis ID ul userului");
                    setGoToHome(true);
                    return true;
                }
            }
                
        }
        console.log("Contul nu e valid");
        return false;
    }

    // const validAccount = (e) => {
    //     e.preventDefault()
    //     const userIF={email, password}
    //     console.log(userIF)
    //     fetch("http://localhost:8080/auth/authenticate",{
    //         method:"POST",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify(userIF)
    //     }).then(res => res.json())
    //     .then((result)=>{setUserArray(result);},[])
    //     console.log(userArray);
        
    // }

    // async function login(username, password) {
    // try {
    //     const payload = {
    //     email: "admin",
    //     password: "admin"
    //     };
    //     console.log(payload);
    //     const res = await axios.post('http://localhost:8080/auth/authenticate', payload);

    //     return res.data;
    // } catch (error) {
    //     console.error(error);
    // }
    // }


    // const handleSubmit = async (event) => {

    //     event.preventDefault();
    //     try {
    //     const res = await login(username, password);
    //     setResponse(res);
    //     } catch (error) {
    //     setResponse(error);
    //     }

    //     console.log(response);
    // };


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