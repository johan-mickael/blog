const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
});

const User = mongoose.model('User', userSchema);

async function get() {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
}

async function create(username, name) {
    try {
        const user = new User({ username, name });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Failed to create user');
    }
}

async function update(id, username, name) {
    try {
        const user = await User.findByIdAndUpdate(id, {
            username: username,
            name: name,
        });
        return user;
    } catch (error) {
        throw new Error('Failed to update user');
    }
}

async function remove(id) {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        return user;
    } catch (error) {
        throw new Error('Failed to delete user');
    }   
}

module.exports = {
    get,
    create,
    update,
    remove,
};