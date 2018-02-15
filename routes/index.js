const mongoose = require('mongoose')
const ArtistController = require('../controllers/artist_controller')
const ReleaseController = require('../controllers/release_controller')
const requireLogin = require('../middlewares/require-login')
const Release = mongoose.model('releases')

module.exports = (app) => {
  app.get('/api/', (req, res) => res.json({ message: "Welcome to the server" }))
  app.post('/api/artists', ArtistController.create)
  app.get('/api/artists', ArtistController.show)
  app.get('/api/releases/', ReleaseController.show)
  app.get('/api/releases/detail/:releaseId', ReleaseController.showDetail)
  app.get('/api/releases/:artist', ReleaseController.showArtist)



  app.post('/api/releases', requireLogin, (req, res, next) => {
    const { title, artist, thumb, catno, format, resource_url, video } = req.body;
    console.log(video.split(',').map(video => ({video})));
    Release.create({
      title,
      artist,
      thumb,
      catno,
      format,
      resource_url,
      videos: video.split(',').map(video => ({video}))
    })
      .populate('videos')
      .then(release => res.status(200).json(release))
      .catch(next)
  })
}
