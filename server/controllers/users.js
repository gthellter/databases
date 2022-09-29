var models = require('../models');

module.exports = {
  get: function (req, res) {
      models.users.getAll( function (data) {
        res.json(data);
      })
  },
  post: function (req, res) {
    // console.log(req);
    models.users.create(req.body, () => {
      res.send('it worked')
    })
  }
};
