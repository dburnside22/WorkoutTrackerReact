import React, { Component } from 'react';
import './Landing.scss';

export class Landing extends Component {
    render() {
        return (
            <form className="landing-page-form">
                <div className="exercise">
                    <label>Exercise</label>
                    <input type="text" name="exercise" />
                </div>  
                <div className="rep">
                    <label>Rep</label>
                    <input type="number" name="rep" />
                </div>  
                <div className="weight">
                    <label>Weight</label>
                    <input type="number" name="weight" />
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Landing
