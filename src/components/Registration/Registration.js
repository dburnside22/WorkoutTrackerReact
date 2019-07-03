import React, { Component } from 'react';
import './Registration.scss';
import { Link } from "react-router-dom";
import fire from '../../config/Fire';

export class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
    }

    signup = (e) => {
        console.log('hit');
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword){
            alert('Passwords dont match!');
            this.resetPasswordState();
        } else {
            const usernamePlusDomain = this.state.username + '@workoutTracker.com';
            fire.auth().createUserWithEmailAndPassword(usernamePlusDomain, this.state.password)
                .then((user) => {
                    window.location = '/signin';
                })
                .catch((error) => {
                    console.log(error);
                    if (error.code === "auth/email-already-in-use") {
                        alert('user already exist');
                        window.location = '/signin';
                    }
                });
        }
    }

    resetPasswordState = () =>{
        this.setState({
            password: '',
            confirmPassword: '',
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.signup(e);
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className='register-form' onKeyPress={this.handleKeyPress}>
                <h1 className="header-logo">||-----||</h1>
                <div className="username">
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="password">
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="confirmPassword">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                </div>
                <div className="buttons">
                    <button className="button2" onClick={this.signup}>Sign Up</button>
                </div>
            </form>
        )
    }
}

export default Registration;
