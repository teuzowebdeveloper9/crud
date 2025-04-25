import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

let lastId = 4; 

app.post('/api/students', (req, res) => {
  const { name, 'e-mail': email } = req.body;
  
  
  lastId++;
  
 
  const newStudent = {
    id: lastId,
    name,
    'e-mail': email
  };
  
  res.json(newStudent);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 