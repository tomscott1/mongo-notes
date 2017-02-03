const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('driver'); // don't import model directly because mocha/mongoose don't integrate well

describe('Drivers controller', () => {
  it('Post to api/drivers creates a new driver', done => {
    // take count of drivers in collection
    Driver.count().then(count => {

      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          // take count of drivers in collection
          // assert that count = original count + 1
          Driver.count().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
});
