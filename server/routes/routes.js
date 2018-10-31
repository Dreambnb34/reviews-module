const path = require('path');
const cors = require('cors');
const controller = require('../controllers');

const router = require('express').Router();

// Enable pre-flight app-wide
router.options('*', cors());

router.get('/rooms', (req, res) => {
  console.log('here');
  res
    .status(200)
    .sendFile('index.html', {root: path.join(__dirname, '../../client/dist')});
});

router.get('/api/reviews/:listingsid', (req, res) => {
  // let listingsid = req.params.listingsid;
  // console.log(listingsid);
  controller.getReviewsById(638);
});

module.exports = router;
