// app.js
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
 app.use(methodOverride('_method'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo-app', { })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use('/', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
