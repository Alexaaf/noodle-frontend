import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const Login = ({setUserID}) => {

    const [email, setEmail] = useState('');
    const [password, setPass]= useState('');
    const [userArray, setUserArray] = useState([]);
    const [goToRegister, setGoToRegister] = useState(false);
    const [goToHome, setGoToHome] = useState(false);

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