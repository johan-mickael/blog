const mongoose = require('../../config/mongo.db');
const { performance } = require('perf_hooks');
const StatisticData = require('../base/StatisticData');
const { stat } = require('fs');

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
            const statistics = new StatisticData(users, users.length, (endTime - startTime), {
                entity: 'users',
                type: 'select',
                path: 'mongodb.log.json',
            });
            statistics.log();
            return statistics.get();
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async create(username, name) {
        try {
            const startTime = performance.now();
            const user = new this.User({ username, name });
            const result = await user.save();
            const endTime = performance.now();
            const statistics = new StatisticData(result, result.length, (endTime - startTime), {
                entity: 'users',
                type: 'insert',
                path: 'mongodb.log.json',
            });
            statistics.log();
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async update(id, username, name) {
        try {
            const startTime = performance.now();
            const user = await this.User.findByIdAndUpdate(id, {
                username: username,
                name: name,
            });
            const endTime = performance.now();
            const statistics = new StatisticData(user, user.length, (endTime - startTime), {
                entity: 'users',
                type: 'update',
                path: 'mongodb.log.json',
            });
            statistics.log();
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async remove(id) {
        try {
            const startTime = performance.now();
            await this.User.findByIdAndDelete(id);
            const endTime = performance.now();
            const statistics = new StatisticData(user, user.length, (endTime - startTime), {
                entity: 'users',
                type: 'delete',
                path: 'mongodb.log.json',
            });
            statistics.log();
            return user;
        } catch (error) {
            throw new Error(error);
        }   
    }
}

module.exports = new UserRepository();