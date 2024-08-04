CREATE DATABASE emergency_waitlist;

\c emergency_waitlist;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code CHAR(3) NOT NULL UNIQUE
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code CHAR(3) NOT NULL,
    severity INT NOT NULL,
    wait_time INT NOT NULL
);
