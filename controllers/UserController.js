const UserModel = require('../models/UserModel');

class UserController {

    userModel = null;  

    constructor(db = 'mongodb') { 
        this.userModel = new UserModel(db);
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.generate = this.generate.bind(this);
    }

    async get(req, res) {
        try {
            const users = await this.userModel.get();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async create(req, res) {
        const { username, name } = req.body;
        try {
            const user = await this.userModel.create(username, name);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async update(req, res) {
        const { id } = req.params;
        const { username, name } = req.body;
        try {
            const user = await this.userModel.update(id, username, name);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async remove(req, res) {
        const { id } = req.params;
        try {
            const user = await this.userModel.remove(id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async generate(req, res) {
        const { amount } = req.params;
        try {
            const users = await this.userModel.insertMockUsers(amount);
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = UserController;