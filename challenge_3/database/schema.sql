DROP DATABASE IF EXISTS multistepcheckout;

CREATE DATABASE multistepcheckout;

USE multistepcheckout;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE addresses (
  id INT NOT NULL AUTO_INCREMENT,
  line_1 VARCHAR(200) NOT NULL,
  line_2 VARCHAR(200) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip VARCHAR(100) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE wallets (
  id INT NOT NULL AUTO_INCREMENT,
  card_number VARCHAR(100) NOT NULL,
  expiration_date VARCHAR(100) NOT NULL,
  cvv VARCHAR(100) NOT NULL,
  billing_zip VARCHAR(100) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO users (name, email, password) VALUES
('Chicken Man',
'chickenman@theinternets.com',
'plaintext');

INSERT INTO addresses (line_1, line_2, city, state, zip, user_id) VALUES
('Planet Chickens',
'Chickensbox X-aXis',
'Wait, you want my city too?',
'No such thing',
'Sector 9, Zone 8, Pipe 29, Target 3',
1);

INSERT INTO wallets (card_number, expiration_date, cvv, billing_zip, user_id) VALUES
("I ain't givin you my credit card number",
"No, I ain't tellin",
"Back off!",
"I already told you, Sector 9, Zone 8, Pipe 29, Target 3",
1);
