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
      ],
      newStudent: {
        name: '',
        email: ''
      }
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newStudent: {
        ...prevState.newStudent,
        [name]: value
      }
    }));
  }

  handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/students/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Remove o estudante do estado
        this.setState(prevState => ({
          students: prevState.students.filter(student => student.id !== id)
        }));
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = this.state.newStudent;
    
    try {
      const response = await fetch('http://localhost:3001/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          'e-mail': email
        })
      });

      if (response.ok) {
        const newStudent = await response.json();
        this.setState(prevState => ({
          students: [...prevState.students, newStudent],
          newStudent: { name: '', email: '' }
        }));
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }

  render() {
    const { students, newStudent } = this.state;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="student-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={this.handleInputChange}
                placeholder="Name of student"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={newStudent.email}
                onChange={this.handleInputChange}
                placeholder="E-mail of student"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add Student
            </button>
          </div>
        </form>

        <Table striped bordered hover variant="dark" className="mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student['e-mail']}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => this.handleDelete(student.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary btn-sm">Refresh</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Students