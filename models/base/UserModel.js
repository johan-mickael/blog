const faker = require('faker');

class UserModel {
    constructor(repository) {
        this.userRepository = repository;
    }

    async get() {
        return await this.userRepository.get();
    }

    async create(username, name) {
        return await this.userRepository.create(username, name);
    }

    async update(id, username, name) {
        return await this.userRepository.update(id, username, name);
    }

    async remove(id) {
        return await this.userRepository.remove(id);
    }

    async generateMockUser() {
        const name = faker.internet.name();
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