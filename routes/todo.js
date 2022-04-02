const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo, getTodoById } = require('../controller/todo');
const authorize = require('../utils/authorize');
const router = express.Router();


router.use(logger);

router.post('/create', authorize,  createTodo);

router.get('/',authorize, getTodos);

router.put('/:id',authorize,  updateTodo);

router.delete('/:id', deleteTodo);

router.get('/:id',authorize, getTodoById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;