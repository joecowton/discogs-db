const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const passport = require('passport')
const app = express();
const PORT = process.env.PORT || 3000;

require('./models/user_model')
require('./services/passport')

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect(keys.mongoDevURI);
};

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

require('./routes/auth_routes')(app);
require('./routes/index')(app);

app.listen(PORT)

module.exports = app;
