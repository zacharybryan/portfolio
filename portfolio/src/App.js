import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
import './App.css';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

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
        <Container className="p-0" fluid='true'>
        
          <Navbar className="border-bottom" bg='transparent' expand='lg'>
            <Navbar.Brand>Zachary Bryan</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            
            <Navbar.Collapse id="navbar-toggle">

              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>

            </Navbar.Collapse>

        
          </Navbar>

        </Container>
      </Router>
    );
  }
}

export default App;
