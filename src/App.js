import React, {Component} from 'react';
import './App.scss';
import Landing from './components/Landing/Landing.js';
import Navigation from './components/Navigation/Navigation.js';
import fire from './config/Fire.js';
import Login from './components/Login/Login';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        sessionStorage.setItem('userEmail', user['email']);
      } else {
        this.setState({ user: null });
      }
    });
  }

  logout = () => {
    fire.auth().signOut();
  }


  render() {
    return (
      <div className="App">
        { this.state.user ? (
          <div>
           < Navigation logout={this.logout} />
           < Landing user={this.state.user} />
          </div>
        ) : (
          <div>
            < Login />
          </div>
        )}
      </div>
    );
  }
}

export default App;
