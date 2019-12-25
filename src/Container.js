import React from 'react';
import Customers from './Customers';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


function Container(props){
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
      </div>

    );
};



export default Container ;