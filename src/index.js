const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
//const db = require('../src/database/config');

const app = express();
//Initializations

//Settings

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
//Routes

//Static Files

//Starting the server
app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});

app.use("/api/login",require('./routes/loginRoutes'));

/*
config.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + config.threadId);
  });
  */