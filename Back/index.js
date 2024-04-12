const express = require('express');

const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyectologin',
});

connection.connect(function(error) {
  if (error) {
    throw error
  } else {
    console.log("Lo hicimos hpta")
  }
}) 

connection.query("SELECT * FROM proyectologin.users", function(error, response, fields) {
    response.map(rsp => {
        console.log(rsp)
    })
})
app.use(cors())

app.use(express.json());

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})