const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'aguilardb'
});

connection.connect((err) => {
  if(err)
  {
    throw err;
  }else
  {
    console.log('La Base de datos se ha conectado exitosamente!');
  }
});


module.exports = connection;