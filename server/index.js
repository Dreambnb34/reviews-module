const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', routes);
app.use(express.static(path.join(__dirname, '../client/dist/')));

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log('listening on 1337!');
});

