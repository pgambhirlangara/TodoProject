const jwt = require('jsonwebtoken');

const DecodeToken = (token) => {
    return jwt.decode(token, {complete: true}).payload;
}

const getToken = (req) => {
    return req.headers.authorization.split(' ')[1];
}

module.exports = { DecodeToken, getToken }; 