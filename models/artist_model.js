const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
	name: String
});

const Artist = mongoose.model('artists', ArtistSchema);

module.exports = Artist;
