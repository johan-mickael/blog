const faker = require('faker');

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

    async generateMockUser() {
        // Fake email and username
        const name = faker.name.findName();
        const username = faker.internet.userName();

        return {
            name,
            username,
        };
    }

    async generateMockUsers(count) {
        const users = [];
        for (let i = 0; i < count; i++) {
            users.push(await this.generateMockUser());
        }
        return users;
    }

    async insertMockUsers(count) {
        const users = await this.generateMockUsers(count);
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            await this.create(user.username, user.name);
        }
    }
}

module.exports = UserModel;