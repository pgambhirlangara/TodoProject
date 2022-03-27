const jwt = require('jsonwebtoken');
const Todo = require('../models/todo');

const createTodo = async (req, res) => {
    const decoded = jwt.decode(token, {complete: true});
    console.log(decoded, "decoded");
    try {
        const output = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            user: decoded.email,
            completionDate: req.body.completionDate,
            priority: req.body.priority
        })
        

        return res.status(201).json({
            message: "Todo Created Succesfully",
            data: output
        })

    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// Get all Todo
const getTodos = (req, res) => {
    Todo.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched Todos',
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Update data of Todo by id
const updateTodo = (req, res) => {
    const id = req.params.id;

    Todo.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated Todo',
            data: result
        });
    })
}

// Delete a Todo by id
const deleteTodo = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "Todo succesfully delete",
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Get Todo data by id
const getTodoById = (req, res) => {
    const id = req.params.id;

    Todo.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `Todo found succesfully`,
            data: result
        })
    })
    .catch((error) => {
        return res.status(404).json({
            message: error.message,
        })
    })

}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    getTodoById
}