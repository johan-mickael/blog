const express = require('express');

const UserController = require('../controllers/UserController');

class UserRouter {

    constructor(expressApp, db) {
        this.app = expressApp;
        this.db = db;
        this.router = express.Router();
    }

    defineRoutes() {
        const userMySQLController = new UserController(this.db);
        this.router.get('/', userMySQLController.get);
        this.router.post('/', userMySQLController.create);
        this.router.put('/:id', userMySQLController.update);
        this.router.delete('/:id', userMySQLController.remove);
        return this.router;;
    }
}

// Export the router
module.exports = UserRouter;
