import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import {Pessoas} from './components/Pessoas'
import {Cadastro} from './components/Cadastro'
const routing = (
  <Router>
  <Switch>
    <Route path='/' exact={true} component={App}/>
    <Route path='/Lista' exact={true} component={Pessoas}/>
    <Route path='/cadastro' exact={true} component={Cadastro}/>
  </Switch>
  </Router>
     );
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
