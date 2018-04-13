const express = require('express');
const router = express.Router();

// Get POST

router.get('/', (req, res) => {
  res.send('POST WORKS');
});

module.exports = router;
