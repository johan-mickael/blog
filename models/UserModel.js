const UserMySQLRepository = require('../repositories/mysql/UserRepository');
const UserMongoDBRepository = require('../repositories/mongodb/UserRepository');

class UserModel {
    constructor(database = 'mongodb') {
        if (database === 'mysql')
            this.repository = UserMySQLRepository;
        else
            this.repository = UserMongoDBRepository;
    }

    async get() {
        try {
            const users = await this.repository.get();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async create(username, name) {
        try {
            const user = await this.repository.create(username, name);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async update(id, username, name) {
        try {
            const user = await this.repository.update(id, username, name);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async remove(id) {
        try {
            const user = await this.repository.remove(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserModel;