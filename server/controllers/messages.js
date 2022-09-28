var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll( function (data) {
      res.json(data);
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, () => {

    })
    console.log(req)

  } // a function which handles posting a message to the database
};
