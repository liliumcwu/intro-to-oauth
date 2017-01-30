// load envars from .env
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.use(bodyParser.urlencoded({urlextended: true}));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use(session({
  secret: 'whatever',
  resave: false,
  saveUnitialized: true
}));
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
