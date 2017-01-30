const express = require('express');
const request = require('request');
const router = express.Router();

const redirect_uri = 'http://127.0.0.1:3000/auth/authorize';
const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET
const state = 'abc';
const scope = 'user';

router.get('/login', (req, res, next) => {
  const url = 'https://github.com/login/oauth/authorize';
  const queryParams = `client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`
  return res.redirect(url + '?' + queryParams);
});

router.get('/authorize', (req, res, next) => {
  const code = req.query.code;
  const state = req.query.state
  const url = 'https://github.com/login/oauth/access_token'
  const data = {
    client_id: client_id,
    client_secret: client_secret,
    code: code,
    redirect_uri: redirect_uri,
    state: state
  }
  const options = {
    method: 'POST',
    url: url,
    headers: { 'Accept': 'application/json'},
    json: data
  }
  // now the server exchanges the code with github
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      // store token in session for later use
      req.session.access_token = body.access_token;
      return res.redirect('/profile');
    } else {
      res.redirect('/');
    }
  })
});

router.get('/logout', (req, res, next) => {
  req.session.access_token = null;
  req.session.user = null;
  return res.redirect('/');
});

module.exports = router;
