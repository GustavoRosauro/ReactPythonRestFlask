import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom'
import './App.css';
function App() {
  return (
    <div>
    <h1>Bem vindo Ao projeto react com python</h1>
    <Link className='btn btn-info' to={'/Lista'}>Lista</Link>
    <Link className='btn btn-success' to={'/cadastro'} style={{marginLeft:5+'%'}}>Cadatro</Link>
    </div>
  );
}
export default App;
