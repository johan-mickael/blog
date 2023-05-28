const userRoutes = require('./userRoutes');

function setupGlobalRoutes(app) {
  app.use('/users', userRoutes);
}

module.exports = setupGlobalRoutes;