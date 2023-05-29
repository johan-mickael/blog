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
}

module.exports = UserModel;