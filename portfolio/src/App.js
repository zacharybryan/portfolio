import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Zach Bryan',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: "Zach Bryan",
        subTitle: "Never give up!",
        subText: "Be Kind."
      },
      about: {
        title: 'About Me'
      },
      contact: 'Lets Connect'
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0">
        
          <Navbar className="border-bottom">
            <Navbar.Brand>Zachary Bryan</Navbar.Brand>
          </Navbar>

        </Container>
      </Router>
    );
  }
}

export default App;
