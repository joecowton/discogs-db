const mongoose = require('mongoose');
const VideoSchema = require('./video_schema')
const { Schema } = mongoose;

const ReleaseSchema = new Schema({
  title: String,
  format: String,
  thumb: String,
  catno: String,
  year: Number,
  resource_url: String,
  id: Number,
  artist: String
})

const Release = mongoose.model('releases', ReleaseSchema)

module.exports = Release;
