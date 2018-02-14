const ArtistController = require('../controllers/artist_controller')
const ReleaseController = require('../controllers/release_controller')

module.exports = (app) => {
  app.get('/api/', (req, res) => res.json({ message: "Welcome to the server" }))
  app.post('/api/artists', ArtistController.create)
  app.get('/api/artists', ArtistController.show)
  app.post('/api/releases', ReleaseController.create)
  app.get('/api/releases', ReleaseController.show)
  app.get('/api/releases/:artist', ReleaseController.showArtist)
}
