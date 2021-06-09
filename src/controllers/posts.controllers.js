const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const desktopDir = path.join(os.homedir(), 'Desktop/savedChanges.json');

// Write post in file system
module.exports.writeFile = async (req, res) => {
  const data = req.body;
  const jsonString = JSON.stringify(data, null, 2);

  try {
    const createdPost = await fs.writeFileSync(desktopDir, jsonString);
    res.status(201).json({ createdPost });
  } catch (error) {
    console.error(error);
    res.status(501).send("Post doesn't saved.");
  }
};
