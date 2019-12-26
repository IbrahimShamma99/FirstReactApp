import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import CustomerDetails from './CustomerDetails';
import axios from 'axios';
import Button from '@material-ui/core/Button';

//NOTE Customers component is  what being passed for
export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomer: 1,
    };
  }

  //NOTE function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //NOTE Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then((response) => {
      this.setState({
        customerList: response,
      });
    });
  }

  render() {
    //SECTION if there is no data to fetch or still loading  
    if (!this.state.customerList)
     return (<p>Loading data </p>);
     //SECTION else
    return (
      <div >
        <div className="col-md-3">
          {' '}
           {' '}
          {this.state.customerList.data.map(
            (customer) => (
            <Panel bsStyle="info" key={customer.name} className="centeralign">
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  {' '}
                    {customer.name}  {' '}
                </Panel.Title>{' '}
                {' '}
              </Panel.Heading>{' '}
               {' '}
              <Panel.Body>
                <p> {customer.email} </p> <p> {customer.phone} </p>  {' '}
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  onClick={() =>
                    this.setState({
                      selectedCustomer: customer.id,
                    })}
                >
                  Click to View Details{' '}
                </Button>{' '}
              </Panel.Body>{' '}
               {' '}
            </Panel>
          )
    )}{' '}
           {' '}
        </div>{' '}
        {' '}
        <div className="col-md-6">
          <CustomerDetails val={this.state.selectedCustomer} /> {' '}
        </div>{' '}
         {' '}
      </div>
    );
  }
}
