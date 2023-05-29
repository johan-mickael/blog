const mongoose = require('../../databases/config/mongo.db');

class UserRepository {

    constructor() {
        const userSchema = new mongoose.Schema({
            username: String,
            name: String,
        });
        
        this.User = mongoose.model('User', userSchema);
    }


    async get() {
        try {
            const users = await this.User.find();
            return users;
        } catch (error) {
            throw new Error('Failed to fetch users');
        }
    }
    
    async create(username, name) {
        try {
            const user = new this.User({ username, name });
            await user.save();
            return user;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }
    
    async update(id, username, name) {
        try {
            const user = await this.User.findByIdAndUpdate(id, {
                username: username,
                name: name,
            });
            return user;
        } catch (error) {
            throw new Error('Failed to update user');
        }
    }
    
    async remove(id) {
        try {
            const { id } = req.params;
            await this.User.findByIdAndDelete(id);
            return user;
        } catch (error) {
            throw new Error('Failed to delete user');
        }   
    }
}

module.exports = new UserRepository();