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
        const email = this.props.user['email'];
        const dateNow = new Date();
        const dateLong = dateNow.toLocaleDateString('en-US' ,{ weekday: "long", year: "numeric", month: "short", day: "numeric" });

        fire.firestore().collection(email).add({
            exercise: this.state.exercise,
            rep: this.state.rep,
            weight: this.state.weight,
            created: dateLong,
            id: dateNow
        }).then((res) => {
            this.resetState();
        }).catch((error) => {
            console.log(error);
        })
    }

    resetState = () => {
        this.setState({
            exercise: '',
            rep: '',
            weight: '',
        });
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
