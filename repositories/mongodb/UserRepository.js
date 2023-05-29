const mongoose = require('../../config/mongo.db');
const { performance } = require('perf_hooks');
const StatisticData = require('../base/StatisticData');
const { count } = require('console');

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
            const startTime = performance.now();
            const users = await this.User.find();
            const endTime = performance.now();
            return new StatisticData(users, users.length, (endTime - startTime));
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async create(username, name) {
        try {
            const user = new this.User({ username, name });
            await user.save();
            return user;
        } catch (error) {
            throw new Error(error);
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
            throw new Error(error);
        }
    }
    
    async remove(id) {
        try {
            await this.User.findByIdAndDelete(id);
            return user;
        } catch (error) {
            throw new Error(error);
        }   
    }
}

module.exports = new UserRepository();