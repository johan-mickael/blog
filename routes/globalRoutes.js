const UserRouter = require('./UserRoutes');

function setupGlobalRoutes(app) {
  const userMySQLRouter = new UserRouter(app, 'mysql').defineRoutes();
  const userMongoDBRouter = new UserRouter(app, 'mongo').defineRoutes();
  app.use('/mysql/users', userMySQLRouter);
  app.use('/mongodb/users', userMongoDBRouter);
}

module.exports = setupGlobalRoutes;