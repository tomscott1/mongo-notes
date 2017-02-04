const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // localhost:5030
  // route handlers
  app.get('/api', DriversController.greeting);
  app.post('/api/drivers', DriversController.create);
  app.put('/api/drivers/:id', DriversController.edit);  // :id is a wildcard
};
