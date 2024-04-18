// Rutas para producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// api/productos
router.post('/', userController.createUser);

module.exports = router;