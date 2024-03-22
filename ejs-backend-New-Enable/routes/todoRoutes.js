// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');


//index.ejs --->pages===>fetch or get and create page redirect ofter submit{todos/new} of the create page 
router.get('/', todoController.getAllTodos); // index.ejs



     //------------------//
// when we are creating basically in index.ejs file link {Create New Todo}:name when i click it will be 
// render create.ejs page form inside this file fill data and and {post} data to create
// In that Link need 2 API
// and u can seen here render click create page {{get}->render create page-->inthat page we have {post} data submit}  
router.get('/todos/new', (req, res) => {
    res.render('create');//render here create page
  });
  
router.post('/todos', todoController.createTodo);


// here in this first route first we get that link or anker tag 
// here get first get the id->edit-->inside i have render here {edit ejs} 
// and here put data means update  
router.get('/todos/:id/edit', todoController.getTodoById);// render edit.ejs
router.put('/todos/:id', todoController.updateTodo);

// delete that perticuler
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;



// The main Important part of the index.ejs which where i get all data getAllTodos
// main getting all data and and passing from in from that file which where link using anker tag inthat file
// createTodo link
// updateTodo link /edit
/// deleteToDo delete No Link
// in the controller file which where render all ejs file 
//create and take 2 controller getbyid and post that data
// edit data 