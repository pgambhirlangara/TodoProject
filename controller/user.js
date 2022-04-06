const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        let newPassword = await bcrypt.hash(req.body.password, 10);
        const output = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword
        })
        
        return res.status(200).json({
            message: "User Registered Succesfully",
            data: output
        })

    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// Login of User
const loginUser = async (req, res) => {
    const email = req.body.email;
    let user = await User.findOne({ email: email});
    if (user) {
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (isValidPassword) {
            const token = jwt.sign({
                name: req.body.name,
                email: req.body.email,
                id: user._id
            }, process.env.JWT_SECRET)
            return res.status(200).json({
                token,
                id: user._id,
                name: user.name,
                email: user.email,
                message:"Succesfully Logged In"
            })
        } else {
            return res.status(401).json({
                message:"Incorrect Password!"
            })
        }
    } else {
        return res.status(500).json({
            message:"User doesn't exist, please register"
        })
    }

}

// Get all Users
const getUsers = (req, res) => {
    User.find()
    .then((result) => {
        return res.status(200).json({
            message: 'Succesfully fetched Users',
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Update data of User by id
const updateUser = (req, res) => {
    const id = req.params.id;

    User.findOneAndUpdate({ _id : id }, req.body)
    .then((result) => {
        res.status(200).json({
            message: 'Succesfully updated User',
            data: result
        });
    })
}

// Delete a User by id
const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then((result) => {
        return res.status(200).json({
            message: "User succesfully delete",
            data: result
        })
    })
    .catch((error) => {
        return res.status(500).json({
            message: error.message
        })
    })
}

// Get User data by id
const getUserById = (req, res) => {
    const id = req.params.id;

    User.findById(id)
    .then((result) => {
        return res.status(200).json({
            message: `User found succesfully`,
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
    registerUser,
    loginUser,
    getUsers,
    updateUser,
    deleteUser,
    getUserById
}