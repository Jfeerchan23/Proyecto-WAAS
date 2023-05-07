const express = require('express')
const pacienteRoutes = express.Router()
const pacienteController = require('../controllers/pacienteController');

/* Obtener todos los pacientes */
pacienteRoutes.get('/pacientes', pacienteController.obtenerTodos)

/* Insertar un paciente */
pacienteRoutes.post('/pacientes',pacienteController.insertar)


/* Obtener un paciente */
pacienteRoutes.get('/pacientes/:id',pacienteController.obtener);

/* Actualizar un paciente */
pacienteRoutes.put('/pacientes/:id', pacienteController.actualizar);

/* Eliminar un paciente */
pacienteRoutes.delete('/pacientes/:id',pacienteController.eliminar);

module.exports = pacienteRoutes;