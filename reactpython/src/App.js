import React from 'react';
import logo from './logo.svg';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import './App.css';
function App() {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Lista">Lista</Nav.Link>
      <Nav.Link href="/Cadastro">Cadastro</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
export default App;
