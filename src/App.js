import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Container from './Container';

class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container />
    </Router>
    );
  }
}

export default App;
