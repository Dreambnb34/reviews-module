const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/routes');

const app = express()
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/rooms', express.static(path.join(__dirname, '../client/dist/')))
  .use('/', routes);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log('listening on 1337!');
});

module.exports = app;
