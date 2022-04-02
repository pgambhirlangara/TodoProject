const express = require('express');
const { registerUser, loginUser, getUsers, updateUser, deleteUser, getUserById } = require('../controller/user');
const router = express.Router();


router.use(logger);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/', getUsers);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.get('/:id', getUserById);

function logger(req, res, next) {
    console.log('Runnning your requests.....');
    next();
}



module.exports = router;