const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes/route");
const cookies = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { requireAuth, checkUser } = require('./middleware/auth');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookies());


// view engine
app.set('view engine', 'ejs');

// database connection
const port = process.env.PORT  || 3000;
const dbURI = 'mongodb+srv://admin:1234@nodetutor.yh4xi.mongodb.net/nodetutor';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));


// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth ,(req, res) => res.render('smoothies'));
app.use(routes);

