const BaseModel = require('../base/UserModel');
const UserRepository = require('../../repositories/mysql/UserRepository');

class UserModel extends BaseModel {
    constructor() {
        super(new UserRepository());
    }
}

module.exports = UserModel;