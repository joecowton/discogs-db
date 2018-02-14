const Release = require('../models/release_model')

module.exports = {
  create(req, res, next) {
    Release.create(req.body)
      .then((release) => { res.status(200).json(release) })
      .catch(next);
  },

  show (req, res, next) {
    Release.find({})
      .then(releases => res.status(200).json(releases))
      .catch(next);
  },

  showArtist (req, res, next) {
    const artist = req.params.artist
    console.log(artist);
    Release.find({ artist: { "$regex": artist, "$options": "i" } })
      .then(releases => res.status(200).json(releases))
      .catch(next);
    }
}
