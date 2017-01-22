const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// in future should create schema's in the schema folder...
const UserSchema = new Schema({
  name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;  // common to only export model/class
