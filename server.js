const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let lastId = 4; // Começando do 4 já que temos estudantes de 1 a 4
let students = [
  {'id':1,'name': 'joey', 'e-mail':'joey@student.com' },
  {'id':2, 'name': 'jack', 'e-mail': 'jack@student.com'},
  {'id':3, 'name': 'willyan', 'e-mail': 'willyan@student.com'},
  {'id':4, 'name': 'james', 'e-mail': 'james@student.com'}
];

app.post('/api/students', (req, res) => {
  const { name, 'e-mail': email } = req.body;
  
  // Incrementa o ID
  lastId++;
  
  // Cria novo estudante
  const newStudent = {
    id: lastId,
    name,
    'e-mail': email
  };
  
  students.push(newStudent);
  res.json(newStudent);
});

// Endpoint para deletar estudante
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(student => student.id === id);
  
  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students.splice(studentIndex, 1);
  res.json({ message: 'Student deleted successfully' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 