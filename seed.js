var app = require('./app');
var models = require('./models');

models.User.create({
  email: 'alex@example.com',
  hashed_password: '$2a$10$aZB36UooZpL.fAgbQVN/j.pfZVVvkHxEnj7vfkVSqwBOBZbB/IAAK' //test
}, function() {
  models.OAuthClientsModel.create({
    clientId: 'papers3',
    clientSecret: '123',
    redirectUri: 'http://localhost:3005/index.html'
  }, function() {
    process.exit();
  });
});
