const express = require('express');
const path = require('path');
const cors = require('cors');

const router = express.Router();

// Enable pre-flight app-wide
router.options('*', cors());

router.get('/api/reviews', (req, res) => {});

module.exports = router;
