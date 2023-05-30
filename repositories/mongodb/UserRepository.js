const { mongoose, createMongoDBPool } = require('../../config/mongo.db');
const { performance } = require('perf_hooks');
const StatisticData = require('../base/StatisticData');

class UserRepository {


    async get() {
        try {
            const connectionPool = await createMongoDBPool();
            const startTime = performance.now();
            const users = await connectionPool.db.collection('users').find({}).limit(100000).toArray();
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
            const connectionPool = await createMongoDBPool();
            const startTime = performance.now();
            const result = await connectionPool.db.collection('users').save();
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

    async createMany(users) {
        try {
            const connectionPool = await createMongoDBPool();
            const startTime = performance.now();
            const result = await connectionPool.db.collection('users').insertMany(users);
            const endTime = performance.now();
            const statistics = new StatisticData(result, result.length, (endTime - startTime), {
                entity: 'users',
                type: 'insert',
                path: 'mongodb.log.json',
            });
            statistics.log();
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async update(id, username, name) {
        try {
            const connectionPool = await createMongoDBPool();
            const startTime = performance.now();
            const user = await connectionPool.db.collection('users').findByIdAndUpdate(id, {
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
            const connectionPool = await createMongoDBPool();
            const startTime = performance.now();
            await connectionPool.db.collection('users').findByIdAndDelete(id);
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