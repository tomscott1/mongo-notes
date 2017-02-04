const Driver = require('../models/driver')

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },
  create(req, res, next) {
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver => res.send(driver))  // send driver back to requester
      .catch(next);
  },
  edit(req, res, next) {
    const driverId = req.params.id;  // req.params.XX == apistring/:XX
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next);

  }
};
