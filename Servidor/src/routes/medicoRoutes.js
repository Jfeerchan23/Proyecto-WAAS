const express = require('express')
const medicoRoutes = express.Router()
const medicoController = require('../controllers/medicoController');

/* Obtener todos los medicos */
medicoRoutes.get('/medicos', medicoController.obtenerTodos)

/* Insertar un recepcionista */
medicoRoutes.post('/medicos',medicoController.insertar)


/* Obtener un recepcionista */
medicoRoutes.get('/medicos/:id',medicoController.obtener);

/* Actualizar un recepcionista */
medicoRoutes.put('/medicos/:id', medicoController.actualizar);

/* Eliminar un recepcionista */
medicoRoutes.delete('/medicos/:id',medicoController.eliminar);

module.exports = medicoRoutes;