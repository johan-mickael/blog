const db = require('../../config/mysql.db');
const QueryStatistic = require('./QueryStatistic');

class UserRepository {

    async get() {
        try {
            const connection = await db.getConnection();
            const rows = await new QueryStatistic(connection, {
                entity: 'users',
                type: 'select',
                path: 'mysql.log.json',
            }).perform('SELECT * FROM users');
            connection.release();
            return rows;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async create(username, name) {
        try {
            const connection = await db.getConnection();
            const rows = await new QueryStatistic(connection, {
                entity: 'users',
                type: 'insert',
                path: 'mysql.log.json',
            }).perform('INSERT INTO users (username, name) VALUES (?, ?)', [username, name]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createMany(users) {
        const values = users.map(item => [item.username, item.name]);
        try {
            const connection = await db.getConnection();
            const rows = await new QueryStatistic(connection, {
                entity: 'users',
                type: 'insert',
                path: 'mysql.log.json',
            }).perform('INSERT INTO users (username, name) VALUES ?', [values]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async update(id, username, name) {
        try {
            const connection = await db.getConnection();
            const rows = await new QueryStatistic(connection, {
                entity: 'users',
                type: 'update',
                path: 'mysql.log.json',
            }).perform('UPDATE users SET username = ?, name = ? WHERE id = ?', [username, name, id]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error(error);
        }
    }
    
    async remove(id) {
        try {
            const connection = await db.getConnection();
            const rows = await new QueryStatistic(connection, {
                entity: 'users',
                type: 'delete',
                path: 'mysql.log.json',
            }).perform('DELETE FROM users WHERE id = ?', [id]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new UserRepository();