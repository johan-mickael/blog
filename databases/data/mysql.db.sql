-- Create database if not exists blog
CREATE DATABASE IF NOT EXISTS blog;

-- create table if not exists blog.user
CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(64) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- insert 10 users mocked data
INSERT INTO users (username, email) VALUES
    ('user1', 'email1'),
    ('user2', 'email2'),
    ('user3', 'email3'),
    ('user4', 'email4'),
    ('user5', 'email5'),
    ('user6', 'email6'),
    ('user7', 'email7'),
    ('user8', 'email8'),
    ('user9', 'email9'),
    ('user10', 'email10');