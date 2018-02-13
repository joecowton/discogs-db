const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
  app.post('/api/stripe', (req, res) => {

    stripe.charges.create({
      ammount: 500,
      currency: 'usd',
      description: '$5 for nothing',
      source: req.body.id
    })

  });
};
