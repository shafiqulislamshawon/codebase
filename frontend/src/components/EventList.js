import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import {Card} from "react-bootstrap";
import moment from "moment";
export default class EventList extends Component {
state = {
    isLoading: true,
    data: [],
    error: null
}

fetchEmp() {
    fetch(`http://localhost:8000/api/events`)
        .then(response => response.json())
        .then(data =>
           this.setState({
               data: data,
               isLoading: false,
           })
        )
       .catch(error => this.setState({ error, isLoading: false }));
}
componentDidMount() {
    this.fetchEmp();
}
 deleteData(id){
        fetch('http://127.0.0.1:8000/api/events/'+id+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });}

render() {
    return (
                    <Container style={{  marginLeft: "auto", marginRight: "auto" , marginTop: "100px", marginBottom: "auto"}}>

        <Card>
            <Card.Body>
    <Card.Title>Events</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">List of events! -
            <Card.Link href="/event/create">Create</Card.Link>
        </Card.Subtitle>
  </Card.Body>
        <Table>
           <tbody>
            <tr>
              <th> NAME</th>
              <th> LOCATION</th>
              <th> TIME</th>
              <th>ACTION</th>
            </tr>

              {!this.state.isLoading?this.state.data.map((user)=>{
              return (<tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.location}</td>
                      <td>{moment(user.date).utc().format("MMM DD, YYYY- HH:mm:ss UTC")} </td>
                      <td>            <Card.Link href={(`/event/update/${user.id}`)} style={{textDecoration: "none"}}>Edit</Card.Link>
                           <button onClick={()=>this.deleteData(user.id)} style={{border: "none", backgroundColor: 'white'}}>Delete</button>

                      </td></tr>
              )
              })
              :
                 "LOADING"
              }
           </tbody>
        </Table>
</Card>
     </Container>

    )
  }
}
