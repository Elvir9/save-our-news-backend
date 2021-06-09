const jwt = require('jsonwebtoken');

// Login user
module.exports.login = async (req, res) => {
  const { userName } = req.body;
  const { password } = req.body;

  try {
    if (userName === 'admin' && password === 'admin') {
      jwt.sign(
        { userName, password },
        'elvirSecret',
        { expiresIn: '24h' },
        (err, token) => {
          res.json({
            token,
          });
        }
      );
    } else {
      res.status(501).json({ message: "Credentials didn't match" });
    }
  } catch (e) {
    console.log('error', e);
  }
};
