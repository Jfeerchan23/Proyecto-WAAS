const express = require('express')
const citaRoutes = express.Router()
const citaController = require('../controllers/citaController');

citaRoutes.get('/', citaController.obtenerTodos)
citaRoutes.get('/obtener/:id',citaController.obtener);

/* Actualizar una cita */
citaRoutes.put('/citas/:id', citaController.reservar);
citaRoutes.post('/citas/crear/',citaController.crearCitas);

/* Obtener todas las citas */
citaRoutes.get('/citasDisponibles', citaController.citasDisponibles);

module.exports = citaRoutes;