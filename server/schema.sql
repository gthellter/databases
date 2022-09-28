DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
id int not null primary key AUTO_INCREMENT,
username varchar(30)
);


 CREATE TABLE rooms (
  id int not null primary key AUTO_INCREMENT,
  roomname varchar(30)
 );

CREATE TABLE messages (
  /* Describe your table here.*/
-- column_name data_type(length) [NOT NULL] [DEFAULT value] [AUTO_INCREMENT] column_constraint;
  /*
  id
  message
  createdAt
  room_id
  user
  */
  id int not null primary key AUTO_INCREMENT,
  message varchar(200),
  createdAt date not null,
  room_id int,
  user_id int,

  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)


);

/* Create other tables and define schemas for them here!
ROOMs
ID
Room


users
ID
Name
 */






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

