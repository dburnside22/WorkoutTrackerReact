import React, { Component } from 'react';
import './Login.scss';
import { Link } from "react-router-dom";
import fire from '../../config/Fire';



export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    
    login = (e) => {
        e.preventDefault();
        const usernamePlusDomain = this.state.username + '@workoutTracker.com';
        fire.auth().signInWithEmailAndPassword(usernamePlusDomain, this.state.password)
            .then((user) => {
                window.location = '/';
            })
            .catch((error) => {
                alert('No user signup or try a different login or password');
                console.log(error);

            });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.login(e);
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className='login-form' onKeyPress={this.handleKeyPress}>
                <h1 className="header-logo">||-----||</h1>
                <div className="username">
                    <label>Username</label>
                    <input value={this.state.username} onChange={this.handleChange} type="text" name="username" />
                </div>
                <div className="password">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" />
                </div>
                <div className="buttons">
                    <button className="button1"><Link to={'/register'}>Sign Up</Link></button>
                    <button className="button2" onClick={this.login}><Link to={'/'}>Sign In</Link></button>  
                </div>
            </form>

        )
    }
}

export default Login
