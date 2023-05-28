const userRepository = require('../repositories/userRepository');

async function get(req, res) {
    try {
        const users = await userRepository.get();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function create(req, res) {
    const { username, name } = req.body;
    try {
        const user = await userRepository.create(username, name);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function update(req, res) {
    const { id } = req.params;
    const { username, name } = req.body;
    try {
        const user = await userRepository.update(id, username, name);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function remove(req, res) {
    const { id } = req.params;
    try {
        const user = await userRepository.remove(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    get,
    create,
    update,
    remove,
};