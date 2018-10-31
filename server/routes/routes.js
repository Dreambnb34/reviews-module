const express = require('express');
const path = require('path');
const cors = require('cors');

const router = express.Router();

// Enable pre-flight app-wide
router.options('*', cors());

router.get('/api/reviews/:listingsid', (req, res) => {
  let listingsid = req.params.listingsid;
  console.log(listingsid);
});

module.exports = router;
