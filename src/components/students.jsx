import React from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Students extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {'id':1,'name': 'joey', 'e-mail':'joey@student.com' },
        {'id':2, 'name': 'jack', 'e-mail': 'jack@student.com'},
        {'id':3, 'name': 'willyan', 'e-mail': 'willyan@student.com'},
        {'id':4, 'name': 'james', 'e-mail': 'james@student.com'}
      ]
    };
  }

  render() {
    return (


      <Table striped bordered hover variant="dark" className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joey</td>
            <td>joey@student.com</td>
            <td>
              <button className="btn btn-danger btn-sm me-2">Delete</button>
              <button className="btn btn-primary btn-sm">Refresh</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>jack</td>
            <td>jack@student.com</td>
            <td>
              <button className="btn btn-danger btn-sm me-2">Delete</button>
              <button className="btn btn-primary btn-sm">Refresh</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>willyan</td>
            <td>willyan@student.com</td>
            <td>
              <button className="btn btn-danger btn-sm me-2">Delete</button>
              <button className="btn btn-primary btn-sm">Refresh</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>james</td>
            <td>james@student.com</td>
            <td>
              <button className="btn btn-danger btn-sm me-2">Delete</button>
              <button className="btn btn-primary btn-sm">Refresh</button>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default Students