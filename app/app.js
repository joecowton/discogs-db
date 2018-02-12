const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const app = express();

require('./models/user_model')
require('./services/passport')
require('./routes/auth_routes')(app);
require('./routes/index')(app);

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect(keys.mongoDevURI);
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to 3000`);
});


app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT)
module.exports = app;
