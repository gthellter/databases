var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      'SELECT message FROM messages',
       (err, results) => {
        if (err) { callback(err, null)}
        else { callback(null, results) }
      }
    )
  }, // a function which produces all the messages
  create: function (message, callback) {
    db.query(
      `INSERT INTO messages (username, roomname, createdAt, message) values (${message.username}, ${message,roomname}, ${new Date()}, ${message.message})`, (err, results) => {
        if(err) { callback(err) }
        else { callback(null, ) }
      }
    )

  } // a function which can be used to insert a message into the database
};
