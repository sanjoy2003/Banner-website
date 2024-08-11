const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

// Route to get banner data
router.get('/getBanner', (req, res) => {
  const sql = 'SELECT * FROM banner WHERE id = 1';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Route to update banner data
router.post('/updateBanner', (req, res) => {
  const { isVisible, description, timer, link } = req.body;
  const sql = 'UPDATE banner SET isVisible = ?, description = ?, timer = ?, link = ? WHERE id = 1';
  db.query(sql, [isVisible, description, timer, link], (err, result) => {
    if (err) throw err;
    res.send('Banner updated successfully');
  });
});

module.exports = router;
