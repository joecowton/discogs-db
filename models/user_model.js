const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	googleId: String,
	name: String
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
