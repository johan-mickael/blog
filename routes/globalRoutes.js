const userRoutes = require('./UserRoutes');

function setupGlobalRoutes(app) {
  app.use('/users', userRoutes);
}

module.exports = setupGlobalRoutes;