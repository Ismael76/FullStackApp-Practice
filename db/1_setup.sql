DROP TABLE IF EXISTS drinks;

CREATE TABLE drinks (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    brand varchar(255) NOT NULL,
    id FOREIGN KEY REFERENCES company (id)
);

DROP TABLE IF EXISTS company;

CREATE TABLE company (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
);
