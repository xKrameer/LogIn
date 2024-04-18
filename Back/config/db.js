// Conectamos a la BD
const mysql = require('mysql');

const conectarDB = async() => {
    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            port: '1521',
            user: 'root',
            password: '',
            database: 'proyectologin',
          });

          connection.connect(function(error) {
            if (error) {
              throw error
            } else {
            }
          }) 
    }
     catch{

     }
}
module.exports = conectarDB();