const path = require('path');
const cors = require('cors');
const controller = require('../controllers');

const router = require('express').Router();

// Enable pre-flight app-wide
router.options('*', cors());

router.get('/rooms/*', (req, res) => {
  console.log('here');
  res
    .status(200)
    .sendFile('index.html', {root: path.join(__dirname, '../../client/dist')});
});

router.get('/api/reviews/:listingsid/:pageNumber', (req, res) => {
  controller
    .getReviewsById(req.params.listingsid, req.params.pageNumber)
    .then(reviews => {
      console.log(reviews);
      res
        .status(200)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(reviews));
    });
});

module.exports = router;
