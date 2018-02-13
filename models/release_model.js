const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReleaseSchema = new Schema({
  title: String,
  artists: [{
    type: Schema.Types.ObjectId,
    ref: 'artists'
  }]
})

const Release = mongoose.model('releases', ReleaseSchema)

module.exports = Release;
