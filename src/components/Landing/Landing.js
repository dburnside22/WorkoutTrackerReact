import React, { Component } from 'react';
import './Landing.scss';
import fire from '../../config/Fire';

export class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercise: '',
            rep: '',
            weight: '',
        }
    }

    submit = (e) => {
        e.preventDefault();
        fire.firestore().collection("exercises").add({
            exercise: this.state.exercise,
            rep: this.state.rep,
            weight: this.state.weight,
        }).then((res) =>{
            console.log('res', res);
        }).catch((error) => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className="landing-page-form">
                <div className="exercise">
                    <label>Exercise</label>
                    <input type="text" name="exercise" value={this.state.exercise} onChange={this.handleChange}/>
                </div>  
                <div className="rep">
                    <label>Rep</label>
                    <input type="number" name="rep" value={this.state.rep} onChange={this.handleChange}/>
                </div>  
                <div className="weight">
                    <label>Weight</label>
                    <input type="number" name="weight" value={this.state.weight} onChange={this.handleChange}/>
                </div>
                <div className="submit">
                    <button type="submit" onClick={this.submit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default Landing
