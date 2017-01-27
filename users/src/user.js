const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;

// in future should create schema's in the schema folder...
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
});

UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

// UserSchema.pre('remove', function () {
//   // this === model instance (i.e joe)
//   const BlogPost = mongoose.model('blogPost');
// });

const User = mongoose.model('user', UserSchema);

module.exports = User;  // common to only export model/class
