import React, { Component } from 'react';
import './Registration.scss';
import { Link } from "react-router-dom";

export class Registration extends Component {
    render() {
        return (
            <form className='register-form'>
                <h1 className="header-logo">||-----||</h1>
                <div className="username">
                <label>Username</label>
                <input type="text" name="username" />
                </div>
                <div className="password">
                <label>Password</label>
                <input type="password" name="password" />
                </div>
                <div className="confirmPassword">
                    <label>Confirm Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="buttons">
                    <button className="button2"> <Link to={'/signin'}>Sign Up</Link></button>
                </div>
            </form>
        )
    }
}

export default Registration;
