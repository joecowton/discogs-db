const express = require('express')
const mongoose = require('mongoose')

const app = express();

if(process.env.NODE_ENV !== 'test'){
  mongoose.connect("mongodb://user:user@ds227858.mlab.com:27858/discogs-dev");
};


app.listen(3000, console.log("app listening on 3000"))
