import React from 'react';
import Header from './CustomerHeader';
import HOC from './HOC';

function Container(props){
    return(
        <div className="App">
        <Header />
        <HOC />
      </div>
    );
};



export default Container ;