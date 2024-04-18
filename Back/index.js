const express = require('express');

const cors = require("cors");

// Creamos el servidor
const app = express();

const conectarDB = require("./config/db")

conectarDB()

app.use(cors())

app.use(express.json());

app.use('/api/user', require('./routes/user'))

app.listen(3000, () => {
    console.log('El servidor esta corriendo perfectamente')
})

app.use('/api/user', () => {
  connection.query("INSERT INTO users set ?", )
})