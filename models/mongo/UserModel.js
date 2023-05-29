const BaseModel = require('../base/UserModel');
const UserRepository = require('../../repositories/mongodb/UserRepository');

class UserModel extends BaseModel {
    constructor() {
        super(new UserRepository());
    }
}

module.exports = UserModel;