const request = require('request');

const clientId = '3b29951da1f67a923cc0';
const clientSecret = '65c6f149aa935641e8f88b76f4cd4c0fb7836e87';
const redirectURI = 'http://localhost:3000/authorize';

function login(req, res) {
  const queryString = `client_id=${clientId}&redirect_uri=${redirectURI}&scope=user&state=abc`;
  const loginURL = `https://github.com/login/oauth/authorize?${queryString}`
  res.redirect(loginURL);
}

function getCode(req, res) {
  const code = req.query.code;
  exchangeCodeForToken(code, (token) => {
    req.session.access_token = token
    res.redirect('/profile');
  })
}

function exchangeCodeForToken(code, cb) {
  const url = 'https://github.com/login/oauth/access_token'
  const payload = {
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
  }
  const options = {
    method: 'POST',
    url: url,
    headers: {
      'Accept': 'application/json'
    },
    json: payload
  }
  request(options, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const token = body.access_token
      cb(token)
    }
  });
}

function getAuthUser(req, res, next) {
  const options = {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      Authorization: `token ${req.session.access_token}`,
      'User-Agent': 'whatevs'
    },
    url: 'https://api.github.com/user'
  }
  request(options, (err, response, body) => {
    console.log(body)
    if (!err && response.statusCode === 200) {
      req.user = body;
      next();
    } else {
      next(err)
    }
  });
}

module.exports = {
  login,
  getCode,
  getAuthUser
}
