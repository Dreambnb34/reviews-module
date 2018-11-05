const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express()
  .use(bodyParser.json())
  .use(cors())
  .use(morgan('dev'))
  .use('/rooms/bundle.js', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../client/dist/bundle.js')),
  )
  .use(express.static(path.join(__dirname, '../client/dist/')))
  .use('/', routes);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log('listening on 1337!');
});

module.exports = app;
