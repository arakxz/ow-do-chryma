const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./config/app');
const database = require('./config/database');

const port = config.port;

app.use(require('./start/routes'));

mongoose.connect(`mongodb://${database.connection.host}/${database.connection.database}`, database.options)
  .catch(error => console.log(error));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})