const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) =>{
  mongoose.connect('mongodb://user:user@ds229448.mlab.com:29448/disocgs-test')
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  const { users, releases, artists } = mongoose.connection.collections;
  users.drop(() => {
    releases.drop(() => {
        artists.drop(() => {
          done();
        })
    })
  });
})
