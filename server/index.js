const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(process.env.PORT || 3000, () => {
  console.log('process.env.PORT', process.env.PORT);
  console.log('App server running');
})