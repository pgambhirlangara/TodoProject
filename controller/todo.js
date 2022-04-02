const jwt = require('jsonwebtoken');
const { DecodeToken, getToken } = require('../utils/util');
const Todo = require('../models/todo');
const User = require('../models/user');

const createTodo = async (req, res) => {
    const token = getToken(req);
    const decoded = DecodeToken(token);
    
    try {
        
        const output = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            user: decoded.id,
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
    const token = getToken(req);
    const decoded = DecodeToken(token);

    Todo.find({ user: decoded.id})
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
  const token = getToken(req);
  const decoded = DecodeToken(token);

  Todo.findById(id).then((data) => {
      if (data) {

        if (data.user == decoded.id) {
            Todo.findOneAndUpdate({ _id: id }, req.body).then((result) => {
                res.status(200).json({
                  message: "Succesfully updated Todo",
                  data: result,
                });
              });
          } else {
            res.status(401).json({
                message: "Not Authorized"
              });
        }
        } else {
            res.status(404).json({
                message: "Task not found!"
              });
        }
       
  })


};

// Delete a Todo by id
const deleteTodo = (req, res) => {
    const id = req.params.id;
    const token = getToken(req);
    const decoded = DecodeToken(token);

    console.log(decoded, "decoded");
  
    Todo.findById(id).then((data) => {
        console.log(data, "data");
        if (data) {

            if (data.user == decoded.id) {
                Todo.findByIdAndDelete(id)
                .then((result) => {
                    return res.status(200).json({
                        message: "Todo succesfully delete",
                        data: result
                    })
                })
            }else {
                res.status(401).json({
                    message: "Not Authorized"
                  });
            }

        } else {
            res.status(404).json({
                message: "Task not found!"
              });
        }
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