import React from "react";
import './signup.css';
import {Link} from 'react-router-dom';
import firebase from "./firebaseConfig";
import  { useState } from 'react';

const Signup =() =>{
    const [Name,setName] =useState('')
    const [email,setemail] =useState('')
    const [Password,setPassword] =useState('')

    const submit= async(e) =>
    {
        e.preventDefault()
        try 
        {
           const user= await firebase.auth().createUserWithEmailAndPassword(email, Password)
           if(user)
           {
            alert("Account created successfully")
           }
        } 
        catch (error) 
        {
            alert(error)
        }
    }
    return(
         <>
         <div className="main_container_signup">
            <div className="header">
                <h2>Signup</h2>
            </div>
         <div className="Box">
            <input type='text'  value={Name} placeholder='UserName' onChange={(e) => setName(e.target.value)}></input>
         </div>
         <div className="Box">
            <input type='text'  value={email} placeholder='E-mail' onChange={(e) => setemail(e.target.value)}></input>
         </div>
         <div className="Box">
            <input type='text'  value={Password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
         </div>
         <p>Already have an account <Link to="/login">Login Now</Link></p>
         <button onClick={submit}>signup</button>
         </div>
         </>
    )
}

export default Signup;