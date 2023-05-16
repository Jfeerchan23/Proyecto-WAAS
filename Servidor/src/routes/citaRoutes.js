const express = require('express')
const citaRoutes = express.Router()
const citaController = require('../controllers/citaController');

citaRoutes.post('/citas/crear/:idMedico',citaController.crearCitas);
citaRoutes.put('/citas/reservar/:id', citaController.reservar);
citaRoutes.get('/citasDisponibles', citaController.citasDisponibles);
citaRoutes.get('/citasProgramadas', citaController.citasProgramadas);
citaRoutes.get('/notificar', citaController.notificar);

module.exports = citaRoutes;