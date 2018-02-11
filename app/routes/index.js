const ArtistController = require('../controllers/artist_controller')

module.exports = (app) => {
  app.get('/api/', (req, res) => res.json({ message: "Welcome to the server" }))
  app.post('/api/artists', ArtistController.create)
  app.get('/api/artists', ArtistController.show)
}
