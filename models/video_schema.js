const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoSchema = new Schema({
  url: String
})

module.exports = VideoSchema;
