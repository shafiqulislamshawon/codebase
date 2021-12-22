import React, { Component } from 'react'
import {Container, Form, Row, Col, Button, Card} from 'react-bootstrap'
const axios = require('axios').default;
export default class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      date: '',
    };
    this.handleChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
onChange = (e) => this.setState({ [e.target.name]: e.target.value });
handleSubmit(event) {
    axios.post('http://localhost:8000/api/events/', {
        name: this.state.name,
        location: this.state.location,
        date: this.state.date
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
    event.preventDefault();
}
render() {
  return (
                          <Container style={{  marginLeft: "auto", marginRight: "auto" , marginTop: "100px", marginBottom: "auto"}}>

        <Card>
            <Card.Body>
    <Card.Title>Events</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Create an event! -
            <Card.Link href="/">Back</Card.Link>
        </Card.Subtitle>
  </Card.Body>
            <Card.Body>
                <Form>

  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Enter your Name" name="name" value={this.state.name} onChange={this.onChange}/>
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Location</Form.Label>
      <Form.Control  placeholder="Enter your Location" name="location" value={this.state.location} onChange={this.onChange}/>
    </Form.Group>
         <Form.Group as={Col} >
      <Form.Label>Date</Form.Label>
      <Form.Control type="datetime-local" name="date" value={this.state.date} onChange={this.onChange}/>
    </Form.Group>
  </Row>
                    <div align="right" >
                        <Button onClick={this.handleSubmit}>submit</Button> </div>

                </Form>

            </Card.Body>
</Card>

     </Container>
      )
   }
}