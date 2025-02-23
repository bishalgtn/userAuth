CREATE DATABASE gtnauthdb;


CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    userName varchar(255) NOT NULL,
    userEmail varchar(255) NOT NULL,
    phoneNumber varchar(255) NOT NULL,
    userPassword varchar(255) NOT NULL
);

CREATE TABLE role(
    user_id SERIAL PRIMARY KEY, 
    user_role varchar(255) NOT NULL,
    userEmail varchar(255),
    CONSTRAINT fk_user FOREIGN KEY(userEmail) REFERENCES users(userEmail) ON DELETE SET NULL
);