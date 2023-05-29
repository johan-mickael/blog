const UserModel = require('../models/UserModel');

const userModel = new UserModel(process.env.DB || 'mysql');

class UserController {

    async get(req, res) {
        try {
            const users = await userModel.get();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async create(req, res) {
        const { username, name } = req.body;
        try {
            const user = await userModel.create(username, name);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async update(req, res) {
        const { id } = req.params;
        const { username, name } = req.body;
        try {
            const user = await userModel.update(id, username, name);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async remove(req, res) {
        const { id } = req.params;
        try {
            const user = await userModel.remove(id);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = UserController;