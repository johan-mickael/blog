const express = require('express');

const UserController = require('../controllers/UserController');

class UserRouter {

    constructor(expressApp, db) {
        this.app = expressApp;
        this.db = db;
        this.router = express.Router();
    }

    defineRoutes() {
        const userController = new UserController(this.db);
        this.router.get('/', userController.get);
        this.router.post('/', userController.create);
        this.router.put('/:id', userController.update);
        this.router.delete('/:id', userController.remove);
        this.router.get('/generate/:amount', userController.generate);
        return this.router;
    }
}

// Export the router
module.exports = UserRouter;
