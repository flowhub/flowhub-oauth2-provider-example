var User = require('./../models').User;

module.exports.create = function(req, res, next) {
  User.authenticate(req.body.email, req.body.password, function(err, user) {
    if (err) return next(err);

    if (user) {
      req.session.userId = user.email;
      var redirect = '/account';
      if (req.query.redirect != null) {
        // generate redirect with all required parameters  
        redirect = req.query.redirect + '?' + 
          'response_type=' + req.query.response_type +
          '&client_id=' + req.query.client_id +
          '&redirect_uri=' + req.query.redirect_uri; 
      }
      res.redirect(redirect);
    } else {
      res.status(401).render('login');
    }
  });
};

module.exports.show = function(req, res, next) {
  res.render('login');
};
