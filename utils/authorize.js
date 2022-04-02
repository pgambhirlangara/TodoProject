const jwt = require('jsonwebtoken');

function authorize(req, res, next) {

  const authorizationHeaader = req.headers.authorization;
  console.log(req.headers.authorization, "authHeader");
  let result;
  if (authorizationHeaader) {
    const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
    const options = {
      expiresIn: "2d",
    };
    try {
      result = jwt.verify(token, process.env.JWT_SECRET, options);
      req.decoded = result;
      next();
    } catch (error) {
      throw new Error(error);
    }
  } else {
    res.status(401).send({
      message: `Authentication error. Token required.`,
    });
  }
}

module.exports = authorize;
