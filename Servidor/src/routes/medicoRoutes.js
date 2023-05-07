const express = require('express')
const medicoRoutes = express.Router()
const medicoController = require('../controllers/medicoController');

/* Obtener todos los medicos */
medicoRoutes.get('/medicos', medicoController.obtenerTodos)

/* Insertar un medico */
medicoRoutes.post('/medicos',medicoController.insertar)


/* Obtener un medico */
medicoRoutes.get('/medicos/:id',medicoController.obtener);

/* Actualizar un medico */
medicoRoutes.put('/medicos/:id', medicoController.actualizar);

/* Eliminar un medico */
medicoRoutes.delete('/medicos/:id',medicoController.eliminar);

/* Obtener especialidades */
medicoRoutes.get('/especialidades',medicoController.obtenerEspecialidades);

module.exports = medicoRoutes;