const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res, next) => {
  const access_token = req.session.access_token;
  if (!access_token) return res.redirect('/');
  const url = 'https://api.github.com/user'
  const options = {
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `token ${access_token}`,
      'User-Agent': 'Oauth Example'
    }
  }
  request(options, (err, response, body) => {
    // res.send(body);
    const user = JSON.parse(body);
    req.session.user = user;
    return res.render('profile', {user: user})
  })
});

module.exports = router;
