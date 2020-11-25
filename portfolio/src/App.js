import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';

class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      title: 'Zach Bryan',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "Zach Bryan",
        subTitle: "Never give up!",
        subText:"Be Kind."
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
          <p>Hi from React</p>
        </Container>
      </Router>
    );
  }
}

export default App;
