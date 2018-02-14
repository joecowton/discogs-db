const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReleaseSchema = new Schema({
  title: String,
  format: String,
  thumb: String,
  catno: String,
  year: Number,
  resource_url: String,
  id: Number,
  artists: [{
    type: Schema.Types.ObjectId,
    ref: 'artists'
  }]
})

const Release = mongoose.model('releases', ReleaseSchema)

module.exports = Release;
