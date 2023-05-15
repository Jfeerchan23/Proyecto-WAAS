const express = require('express')
const citaRoutes = express.Router()
const citaController = require('../controllers/citaController');

/* Obtener todas las citas */
citaRoutes.get('/citas', citaController.obtenerTodos)

/* Insertar una cita */
citaRoutes.post('/citas',citaController.insertar)


/* Obtener una cita */
citaRoutes.get('/citas/:id',citaController.obtener);

/* Actualizar una cita */
citaRoutes.put('/citas/:id', citaController.actualizar);

/* Eliminar una cita */
citaRoutes.delete('/citas/:id',citaController.eliminar);

/*Crear serie de citas*/
citaRoutes.post('/citas/crear/:id',citaController.crearCitas);

/* Obtener todas las citas */
citaRoutes.post('/citasDisponibles', citaController.citasDisponibles);

/* Obtener todas las citas */
citaRoutes.get('/citasProgramadas', citaController.citasProgramadas);

module.exports = citaRoutes;