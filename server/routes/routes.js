const router = require('express').Router();
const cors = require('cors');

// Enable pre-flight app-wide
router.options('*', cors());

// Send index.html
router.get('/', (req, res) => {
  res.status(200);
  res.set('Content-Type', 'text/html');
  res.sendFile('index.html');
});

export default router;
