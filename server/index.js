const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

mongoose.connect(process.env.MONGO_ATLAS_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => {
    console.log(`Connected to DB & Server Running on Port: ${PORT}`)
  }))
  .catch((error) => console.log(`${error} did not connect`));