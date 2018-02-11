const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String
});

const Artist = mongoose.model('artists', ArtistSchema);

module.exports = Artist;
