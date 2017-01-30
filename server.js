const express = require('express');
const github = require('./lib/github');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// Routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${PORT}`);
});
