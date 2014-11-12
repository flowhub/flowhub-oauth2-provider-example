var app = require('./app');
var models = require('./models');
var bcrypt = require('bcrypt');

function hashPassword(password) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

models.User.create({
  firstname: 'Flow',
  lastname: 'B. Programming',
  email: 'flowhub@example.com',
  hashed_password: hashPassword('test')
}, function() {
  models.OAuthClientsModel.create({
    clientId: 'papers3',
    clientSecret: '123',
    redirectUri: 'http://localhost:3005/index.html'
  }, function() {
    process.exit();
  });
});
