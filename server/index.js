import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userModel from './model/user'; // Ensure the path is correct

const app = express();
app.use(cors());
app.use(express.json()); // Corrected to express.json()

mongoose.connect("mongodb://0.0.0.0/project02", { // Corrected the connection string
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error.message);
});

// Fixed duplicate root route
app.get('/', (req, res) => {
  userModel.find()
    .then(users => res.json(users)) // Corrected the usage of .find()
    .catch(err => res.json(err));
});

// Added route to get user by ID
app.get('/user/:id', (req, res) => { // Correct route definition
  const id = req.params.id;
  userModel.findById(id) // Corrected the method to findById
    .then(user => res.json(user)) // Renamed 'users' to 'user' for clarity
    .catch(err => res.json(err));
});

app.put('/updateuser/:id', (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      age: req.body.age, // Added age to the update
      email: req.body.email
    },
    { new: true } // This option returns the updated document
  )
  .then(updatedUser => res.json(updatedUser))
  .catch(err => res.status(500).json(err));
});

app.delete('/deleteuser/:id', (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndDelete(id) // Corrected method to findByIdAndDelete
  .then(deletedUser => res.json(deletedUser)) // Corrected variable name and logic
  .catch(err => res.status(500).json(err));
});

app.post('/createuser', (req, res) => { // Ensure the route is defined correctly
  userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
