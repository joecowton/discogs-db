const express = require('express')
const mongoose = require('mongoose')

const app = express();

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect("mongodb://user:user@ds227858.mlab.com:27858/discogs-dev");
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to 3000`);
});

app.get('/api/', (req, res) => res.json({ message: "Welcome to the server" }))
app.listen(3000, console.log("app listening on 3000"))

module.exports = app;
