const Artist = require('../models/artist_model')

module.exports = {
  create(req, res, next) {
    Artist.create(req.body)
      .then(artist => res.status(200).json(artist))
      .catch(next);
  },

  show (req, res, next) {
    Artist.find({})
      .then(artists => res.status(200).json(artists))
      .catch(next);
    }
}
