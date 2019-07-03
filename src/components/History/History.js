import React, { Component } from 'react';
import './History.scss'
import Navigation from '../Navigation/Navigation';
import fire from '../../config/Fire';
import reverse from 'reverse-object-order';

export class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: [],
            sortedWorkouts: [],
        }
    }


    componentDidMount() {
        const userEmail =  sessionStorage.getItem('userEmail');
        fire.firestore().collection(userEmail)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.addWorkout(doc.data());
                })
                this.sortWorkouts();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    addWorkout = (workout) => {
        this.setState({
            workouts: [...this.state.workouts, workout]
        });
    }

    sortWorkouts = () => {
        const groupBy = key => array =>
        array.reduce((objectsByKeyValue, obj) => {
            const value = obj[key];
            objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
            return objectsByKeyValue;
        }, {});

        const groupByDates = groupBy('created');

        let sortedWorkouts = groupByDates(this.state.workouts);
        
        const reversesWorkoutOrder = reverse(sortedWorkouts);




        this.setState({
            sortedWorkouts: reversesWorkoutOrder,
        })
    }

    render() {

        let allWorkoutDivs = [];
        Object.keys(this.state.sortedWorkouts).forEach((workouts, i) => {
            let dateDiv = <h2 className='date-div' key={i+workouts}>{this.state.sortedWorkouts[workouts][0].created}</h2>;
            allWorkoutDivs.push(dateDiv);    
                this.state.sortedWorkouts[workouts].forEach((workout, i) => {
                    allWorkoutDivs.push(
                        <div key={workout.id} className='exercise-wrapper'>
                            <span className='exercise-details'> - {workout.exercise} {workout.rep} x {workout.weight}</span>
                        </div>
                    )
                });
        });
        
        return (
            <div>
                < Navigation />
                <h1 className="history-header">History</h1>

                {allWorkoutDivs}
            </div>
        )
    }
}

export default History
