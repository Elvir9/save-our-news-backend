const express = require('express');

module.exports.login = async (req, res) => {
  const { userName } = req.body;
  const { password } = req.body;
  console.log(userName, password);
  try {
    if (userName === 'admin' && password === 'admin') {
      res.status(200).json({ message: 'Success' });
    } else {
      res.redirect('/login');
      res.status(501).json({ message: "Credential didn't match" });
    }
  } catch (e) {
    console.log(e);
  }
};
