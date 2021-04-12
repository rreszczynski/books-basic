START TRANSACTION;

CREATE DATABASE tin_projekt;
USE tin_projekt;

CREATE TABLE authors (
author_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(200) NOT NULL,
updatedAt DATE,
createdAt DATE
);

CREATE TABLE books (
book_id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
issue_date DATE NOT NULL,
author_id INT,
updatedAt DATE,
createdAt DATE,
FOREIGN KEY (author_id)
	REFERENCES authors(author_id)
    ON UPDATE RESTRICT ON DELETE CASCADE
);

INSERT INTO authors (first_name, last_name) VALUES
("Olga", "Tokarczuk"),
("William", "Golding"),
("Magdalena", "Grzebałkowska"),
("George", "Orwell"),
("Aldous", "Huxley");

INSERT INTO books (title, issue_date, author_id) VALUES
("Księgi Jakubowe", "2014-10-01", 1),
("Władca Much", "1954-09-17", 2),
("Komeda", "2018-05-01", 3),
("Folwark Zwierzęcy", "1945-08-17", 4),
("Nowy wspaniały świat", "1932-04-25", 5);

COMMIT;