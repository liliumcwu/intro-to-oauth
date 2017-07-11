require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', require('./routes/index'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log('CLIENT_ID is', CLIENT_ID);
  console.log('CLIENT_SECRET is', CLIENT_SECRET);
});
