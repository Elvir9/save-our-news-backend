const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  // const bearerHeader = req.headers['authorization'];

  // // Check if bearer if undefined
  // if (typeof bearerHeader !== 'undefined') {
  //   // Take a token
  //   const bearer = bearerHeader.split(' ');
  //   const bearerToken = bearer[1];

  //   req.token = bearerToken;
  //   next();
  // } else {
  //   res.sendStatus(403); //Forbidden
  // }
  // const token = req.cookies.jwt;
  // console.log(token);
  const bearerHeader = req.headers['authorization'];
  const bearerToken = bearerHeader;
  console.log(bearerToken);
  req.token = bearerToken;

  if (bearerToken) {
    jwt.verify(bearerToken, 'elvirSecret', (err, decodedToken) => {
      if (err) {
        console.log('error', err.message);
        res.redirect('/');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

module.exports = { requireAuth };
