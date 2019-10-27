import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Pessoas} from './components/Pessoas';
export default class App extends Component {
  displayName = App.name  

   routing = (
     <Router>
        <div>
          <Route path='/' component={Pessoas} />
        </div>
        </Router>
      );
  }
