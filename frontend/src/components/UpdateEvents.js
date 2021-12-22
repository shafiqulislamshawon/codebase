import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

const UpdateEvents = () => {

    const { pk } = useParams();
    const [name, setName] = useState(null)
    const [location, setLocation] = useState(null)
    const [date, setDate] = useState(null)


    useEffect(() => {
        loadStudents();
    }, [])



   let loadStudents = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/events/${pk}`);
    console.log(result.data.name);

    setName(result.data.name);
    setLocation(result.data.location);
    setDate(result.data.date);
   }


// Update s single student by id

   const updateSingleStudent = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('location',location)
        formField.append('date',date)
        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/events/${pk}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
        })

    }





    return (
                          <Container style={{  marginLeft: "auto", marginRight: "auto" , marginTop: "100px", marginBottom: "auto"}}>

        <Card>
            <Card.Body>
    <Card.Title>Events</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Edit an event! -
            <Card.Link href="/">Back</Card.Link>
        </Card.Subtitle>
  </Card.Body>
            <Card.Body>
                <Form>

  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>

    <Form.Control placeholder="Enter your Name" name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Location</Form.Label>
      <Form.Control  placeholder="Enter your Location" name="location"

          value={location}
          onChange={(e) => setName(e.target.value)}/>
    </Form.Group>
         <Form.Group as={Col} >
      <Form.Label>Date</Form.Label>
      <Form.Control name="date"
          value={date}
          onChange={(e) => setName(e.target.value)}/>
    </Form.Group>
  </Row>
                    <div align="right" >
                        <Button >Update</Button>
                    </div>

                </Form>

            </Card.Body>

</Card>


     </Container>




    );
};

export default UpdateEvents;