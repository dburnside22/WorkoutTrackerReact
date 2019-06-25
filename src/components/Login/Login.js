import React, { Component } from 'react';
import './Login.scss';
import { Link } from "react-router-dom";


export class Login extends Component {
    

    render() {
        return (
            <form className='login-form'>
            <h1 className="header-logo">||-----||</h1>
            <div className="username">
                <label>Username</label>
                <input type="text" name="username" />
            </div>
            <div className="password">
                <label>Password</label>
                <input type="password" name="password" />
            </div>
            <div className="buttons">
                <button className="button1"><Link to={'/register'}>Sign Up</Link></button>
                <button className="button2"><Link to={'/'}>Sign In</Link></button>  
            </div>
            </form>

        )
    }
}

export default Login
