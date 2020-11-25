import React from 'react';
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
      ]
    }
  }
  render() {
    return (
      <div>Hello React</div>
    );
  }
}

export default App;
