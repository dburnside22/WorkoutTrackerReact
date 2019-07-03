import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import History from './components/History/History';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Registration} />
        <Route path="/signin" component={Login} />
        <Route path="/history" component={History} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
