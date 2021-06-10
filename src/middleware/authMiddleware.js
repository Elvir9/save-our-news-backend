const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  const bearerToken = bearerHeader;
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
