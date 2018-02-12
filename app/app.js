const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('./services/passport')
require('./routes/authRoutes')(app);
require('./routes/index')(app);

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect("mongodb://user:user@ds227858.mlab.com:27858/discogs-dev");
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to 3000`);
});


app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.listen(3000, console.log("app listening on 3000"))

module.exports = app;
