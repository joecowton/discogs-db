const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const app = express();
const routes = require('./app/routes/index');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect("mongodb://user:user@ds227858.mlab.com:27858/discogs-dev");
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to 3000`);
});

passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken) => {
      console.log(accessToken);
  })
)

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

routes(app);

app.listen(3000, console.log("app listening on 3000"))

module.exports = app;
