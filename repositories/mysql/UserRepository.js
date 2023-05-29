const db = require('../../databases/config/mysql.db');

class UserRepository {

    async get() {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('SELECT * FROM users');
            connection.release();
            return rows;
        } catch (error) {
            throw new Error('Failed to fetch users');
        }
    }
    
    async create(username, name) {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('INSERT INTO users (username, name) VALUES (?, ?)', [username, name]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error('Failed to insert user');
        }
    }
    
    async update(id, username, name) {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('UPDATE users SET username = ?, name = ? WHERE id = ?', [username, name, id]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error('Failed to update user');
        }
    }
    
    async remove(id) {
        try {
            const connection = await db.getConnection();
            const [rows, fields] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);
            connection.release();
            return rows;
        } catch (error) {
            throw new Error('Failed to delete user');
        }
    }
}

module.exports = new UserRepository();