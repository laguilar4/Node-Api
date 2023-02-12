const db = require('../database/config');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const login = (user, password, res) => 
{
    try {
        db.query(`SELECT * FROM USERS WHERE USER = '${user}' AND PASSWORD = '${password}'`, function (error, results, fields) {
            if(error)
            {
                throw error;
            }else
            {
                //res.json(results);
                //console.log(results[0]['NOMBRE'])
                if(results[0]){
                const token = jwt.sign(
                    { 
                        nombre: results[0]['NOMBRE'],
                        apellido:results[0]['APELLIDO'],
                        rol: results[0]['ROL']
                    },
                        process.env.SEED_TOKEN,
                    {
                        expiresIn: "2h",
                    }
                  );
                  res.status(200).json({
                    status: "success",
                    results,
                    token
                });
                }else{
                    res.status(403).json({
                        status: "fail",
                        message: "Usuario o contraseña no valido"
                    });
                }
                //return results;
            }
          });
       
    } catch (error) {
        console.log(error);
    }
}

module.exports = login;

/*
jwtCtrl.generateToken = async(req, res) => 
{
    try {
        const { user, password } = req.body;
        db.connect();
        const sql = await connection.query(`SELECT * FROM USERS WHERE USER = ${user} AND PASSWORD = ${password}`, function (error, results, fields) {
            if(error)
            {
                throw error;
            }else
            {
                return results;
            }
          });
        db.end();
    } catch (error) {
        console.log(error);
    }
}
*/