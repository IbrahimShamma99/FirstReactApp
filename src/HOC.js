import {Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';
import Customers from './Customers';
import './App.css';
import { CustomerList , base } from './constants/constants';

function HOC () {
  return (
      /*NOTE when loaded at path="/" redireact 
      to render dynamically /customerlist */
    <Switch>
      <Route exact path={base} render={() => 
      <Redirect to={CustomerList} />} />
      <Route exact path={CustomerList} component={Customers} />
    </Switch>
    /* NOTE the last Route it means on this path "/customerlist" 
     * render Customers Component 
     */ 
  );
}

export default HOC;
