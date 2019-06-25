import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navigation.scss';


export class Navigation extends Component {
    state = {
        navClicked: false
    };
    

    toggleNavigation = () => {
        this.setState({
            navClicked: !this.state.navClicked,
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.navClicked ? "hidden" : "navigation"}>
                    <div onClick={this.toggleNavigation}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
                </div>

            
                <div className={this.state.navClicked ? "navigation-clicked" : "hidden"}>
                    <div onClick={this.toggleNavigation}>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <nav>
                        <li> <Link to={'/'} onClick={this.toggleNavigation}>Home</Link></li>
                        <li> <Link to={'/history'} onClick={this.toggleNavigation}>History</Link></li>
                        <li> <Link to={'/calendar'} onClick={this.toggleNavigation}>Calendar</Link></li>
                        <li> <Link to={'/signin'} onClick={this.toggleNavigation}>Logout</Link></li>
                    </nav>
                    <div className='dark-overlay'></div>
                </div>
            </div>
        )
    }
}

export default Navigation
