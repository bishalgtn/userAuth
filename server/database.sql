CREATE DATABASE gtnauthdb;


CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    userName varchar(255) NOT NULL,
    userEmail varchar(255) NOT NULL,
    phoneNumber varchar(255) NOT NULL,
    userPassword varchar(255) NOT NULL
);