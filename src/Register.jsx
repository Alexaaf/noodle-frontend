import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const Register = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [username, setName] = useState('');
    const [id, setID] = useState('');
    const [role, setRole] = useState('');
    const [goToLogin, setGoToLogin] = useState(false);
    const [info, setInfo] = useState(0);


    if(goToLogin)
    {
        return <Navigate to= "/login" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleClick = (e) =>
    {
        e.preventDefault()
        const userIF={id, username, email, password, role, info}
        console.log(userIF)
        fetch("http://localhost:8080/user/addUser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userIF)
        }).then(() => {console.log("New user added!")})
        setGoToLogin(true);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
         <form className = "register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={username} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit" onClick={handleClick}>Register</button>
        </form>
            <button className = "link-btn" onClick={() => setGoToLogin(true)}>User LogIn</button>
        </div>
    )
}