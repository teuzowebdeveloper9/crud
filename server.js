import express from 'express';
import cors from 'cors';

const app = express();

// Configuração CORS mais específica
app.use(cors({
  origin: 'http://localhost:5173', // URL do frontend Vite
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

app.use(express.json());

let lastId = 4;
let students = [
  {'id':1,'name': 'joey', 'e-mail':'joey@student.com' },
  {'id':2, 'name': 'jack', 'e-mail': 'jack@student.com'},
  {'id':3, 'name': 'willyan', 'e-mail': 'willyan@student.com'},
  {'id':4, 'name': 'james', 'e-mail': 'james@student.com'}
];

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/students', (req, res) => {
  const { name, 'e-mail': email } = req.body;
  lastId++;
  
  const newStudent = {
    id: lastId,
    name,
    'e-mail': email
  };
  
  students.push(newStudent);
  res.json(newStudent);
});

app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentIndex = students.findIndex(student => student.id === id);
  
  if (studentIndex === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const deletedStudent = students.splice(studentIndex, 1)[0];
  res.json({ message: 'Student deleted successfully', deletedStudent });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Lista inicial de estudantes:', students);
}); 