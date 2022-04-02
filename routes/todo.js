const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo, getTodoById } = require('../controller/todo');
const router = express.Router();


router.use(logger);

router.post('/create', createTodo);

router.get('/', getTodos);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

router.get('/:id', getTodoById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;