import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'

export class App extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.first_name)
    axios.post('http://localhost:8000/patients/add', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      address: this.state.address,
      reason: this.state.reason
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  state = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    reason: '',
  }

onChange = (e) =>{
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
}

  render(){

    return (
      <div className="App">
        <Container>
          <Form onSubmit={(e)=> this.handleClick(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" name="first_name" style={{ width: '300px', float: 'right' }} onChange={this.onChange} value={this.state.first_name}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" style={{ width: '300px', float: 'right' }} name="last_name" placeholder="Enter Last Name" onChange={this.onChange} value={this.state.last_name}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" style={{ width: '300px', float: 'right' }} name="email" placeholder="Enter Email Address" onChange={this.onChange} value={this.state.email}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" style={{ width: '300px' , float: 'right'}} name="address" placeholder="Address" onChange={this.onChange} value={this.state.address}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Reason</Form.Label>
              <Form.Control type="text" style={{ width: '300px', float: 'right' }} name="reason" placeholder="Reason for Admiting" onChange={this.onChange} value={this.state.reason}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
