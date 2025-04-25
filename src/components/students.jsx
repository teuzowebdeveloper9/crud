import React from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'http://localhost:3001/api';

class Students extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      newStudent: {
        name: '',
        email: ''
      },
      error: null
    };
  }

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = async () => {
    try {
      const response = await fetch(`${API_URL}/students`);
      if (!response.ok) {
        throw new Error('Failed to load students');
      }
      const students = await response.json();
      this.setState({ students });
    } catch (error) {
      console.error('Error loading students:', error);
    }
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
      await fetch(`${API_URL}/students/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      this.setState(prevState => ({
        students: prevState.students.filter(student => student.id !== id)
      }));

    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = this.state.newStudent;
    
    try {
      const response = await fetch(`${API_URL}/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          'e-mail': email
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add student');
      }

      const newStudent = await response.json();
      this.setState(prevState => ({
        students: [...prevState.students, newStudent],
        newStudent: { name: '', email: '' },
        error: null
      }));
    } catch (error) {
      console.error('Error adding student:', error);
      this.setState({ error: 'Failed to add student. Is the server running?' });
    }
  }

  render() {
    const { students, newStudent, error } = this.state;
    
    return (
      <div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        
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
                    onClick={() => {
                      if (window.confirm('Tem certeza que deseja deletar este estudante?')) {
                        this.handleDelete(student.id);
                      }
                    }}
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