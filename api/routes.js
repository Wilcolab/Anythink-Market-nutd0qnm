module.exports = function (app) {
  const arithmetic = require('./controller');

  // Existing route (DO NOT CHANGE)
  app.get('/arithmetic', arithmetic.calculate);

  // New route (ADD, do not replace)
  app.get('/api/calculate', function (req, res) {
    arithmetic.calculate(req, res);
  });
};
