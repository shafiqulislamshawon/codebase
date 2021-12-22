import React, { Component } from "react";
import moment from "moment";
import { Card } from "react-bootstrap";

export class Events extends Component {
  render() {
    const { employee, isLoading } = this.props;
    return (
      <>
        {!this.state.isLoading
          ? this.state.employee.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.location}</td>
                  <td>
                    {moment(user.date)
                      .utc()
                      .format("MMM DD, YYYY - HH:mm:ss UTC")}{" "}
                  </td>
                  <td>
                    {" "}
                    <Card.Link href='' style={{ textDecoration: "none" }}>
                      Edit
                    </Card.Link>
                    <Card.Link href='' style={{ textDecoration: "none" }}>
                      Delete
                    </Card.Link>
                  </td>
                </tr>
              );
            })
          : "LOADING"}
      </>
    );
  }
}

export default Events;
