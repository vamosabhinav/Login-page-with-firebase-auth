import './signup.css';
import {Link} from 'react-router-dom';
import firebase from "./firebaseConfig";
import  { useState } from 'react';

const Login=() =>{
    const [email,setemail] =useState('')
    const [Password,setPassword] =useState('')

    const submit= async(e) =>
    {
        e.preventDefault()
        try 
        {
           const user= await firebase.auth().signInWithEmailAndPassword(email, Password)
           if(user)
           {
             alert('Home Page')
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
                <h2>Login</h2>
            </div>
         <div className="Box">
            <input type='email'  value={email} placeholder='E-mail' onChange={(e) => setemail(e.target.value)}></input>
         </div>
         <div className="Box">
            <input type='password'  value={Password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
         </div>
         <p>Don't have an account <Link to="/login">Create Account</Link></p>
         <button onClick={submit} >Login</button>  
           
         </div>
         </>
    )
}

export default Login;