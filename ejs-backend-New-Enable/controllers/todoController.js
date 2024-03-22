// controllers/todoController.js
const Todo = require('../models/todo');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.render('edit', { todo });
  } catch (err) {
    res.status(404).json({ message: 'Todo not found' });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
