var db = require('../db');
var mysql = require('mysql2');




module.exports = {
  getAll: function (callback) {

    // console.log(db)
    // // db.connection;
    // db.connect((err) => {
    //   if (err) {callback(err)}
    //   db.query('SELECT message FROM messages',
    //        (err, results) => {
    //         if (err) { callback(err, null)}
    //         else { callback(null, results) }
    //       }
    //     )
    // });

    db.connection.query(
      'SELECT message FROM messages',
       (err, results) => {
        if (err) { callback(err, null)}
        else { callback(null, results) }
      }
    )
  }, // a function which produces all the messages
  create: function (message, callback) {
    console.log('hello')
    db.connection.query(

      `INSERT INTO messages (username, roomname, createdAt, message) values (${message.username}, ${message.roomname}, ${new Date()}, ${message.message})`, (err, results) => {
        if(err) { callback(err) }
        else { callback(null, results ) }
      }
    )

  } // a function which can be used to insert a message into the database
};
