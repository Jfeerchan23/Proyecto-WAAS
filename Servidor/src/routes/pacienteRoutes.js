const express = require('express')
const pacienteRoutes = express.Router()
const pacienteController = require('../controllers/pacienteController');

/* Obtener todos los pacientes */
pacienteRoutes.get('/pacientes', pacienteController.obtenerTodos)

/* Insertar un recepcionista */
pacienteRoutes.post('/pacientes',pacienteController.insertar)


/* Obtener un recepcionista */
pacienteRoutes.get('/pacientes/:id',pacienteController.obtener);

/* Actualizar un recepcionista */
pacienteRoutes.put('/pacientes/:id', pacienteController.actualizar);

/* Eliminar un recepcionista */
pacienteRoutes.delete('/pacientes/:id',pacienteController.eliminar);

module.exports = pacienteRoutes;