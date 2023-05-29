const UserRouter = require('./UserRoutes');

function setupGlobalRoutes(app) {
  app.use('/mysql/users', new UserRouter(app, 'mysql').defineRoutes());
  app.use('/mongodb/users', new UserRouter(app, 'mongo').defineRoutes());
}

module.exports = setupGlobalRoutes;