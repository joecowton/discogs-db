const Release = require('../models/release_model')
const requireLogin = require('../middlewares/require-login')

module.exports = {
  createRelease (req, res, next) {
   const { title, artist, thumb, catno, format, resource_url, id } = req.body;
   Release.create({
     title,
     artist,
     thumb,
     catno,
     format,
     resource_url,
     id
   })
     .then(release => res.status(200).json(release))
     .catch(next)
  },

  show (req, res, next) {
    Release.find({ })
      .then(releases => res.status(200).json(releases))
      .catch(next);
  },

  showDetail (req, res, next) {
    Release.findOne({ id: req.params.releaseId  })
      .then(releases => res.status(200).json(releases))
      .catch(next);
  },

  showArtist (req, res, next) {
    const artist = req.params.artist

    Release.find({ artist: { "$regex": artist, "$options": "i" } })
      .then(releases => res.status(200).json(releases))
      .catch(next);
    }

}
