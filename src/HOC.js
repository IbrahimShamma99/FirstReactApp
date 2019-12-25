import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Customers from './Customers';
import './App.css';

function HOC() {
    return ( <
        Switch >
        <
        Route exact path = "/"
        render = {
            () => ( <
                Redirect to = "/customerlist" / >
            )
        }
        /> <
        Route exact path = '/customerlist'
        component = { Customers }
        /> < /
        Switch >
    );
};

export default HOC;