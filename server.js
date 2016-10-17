// require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', '.');

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(port, (error) => {
  if(error) {
    console.log('Error with server.', error);
  } else {
    console.log('Listening to port', port);
  }
});
