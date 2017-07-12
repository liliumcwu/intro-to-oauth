var express = require('express'),
    request = require('request'),
    router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.access_token) {
    console.log('There was no access token');
    return res.redirect('/');
  }
  const url = 'https://api.github.com/user';
  var options = {
    url: `${url}`,
    headers: {
      'User-Agent': 'Intro-to-Oauth-App',
      'Accept': 'application/json',
      'Authorization': `token ${req.session.access_token}`
    }
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // console.log('response', response);
      console.log('yusss!');
      // console.log('Server responded with', body); // Print the response status code if a response was received
      // var login = JSON.parse(body).login;
      res.render('profile', JSON.parse(body));
    }
    else {
      console.log('There was an error');
      // console.log('Response was', response);
      console.log('Error was', error);
      console.log('response.statusCode', response.statusCode);
      res.redirect('/');
    }
  });
});

module.exports = router;
