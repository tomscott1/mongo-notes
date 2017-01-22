const mongoose = require('mongoose') // use ES6 import mongoose from ('mongoose')

mongoose.Promise = global.Promise;  // mongoose promise library is deprecated

before((done) => {
  // connect to DB before running mocha
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => console.log('Connected to DB'))
    .on('error', (error) => {
      console.warn('Warning', error);
    });
  done();
});


beforeEach ((done) => {
  // drop users collection before each test
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
