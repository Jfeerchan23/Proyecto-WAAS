const express = require('express')
const medicoRoutes = express.Router()
const medicoController = require('../controllers/medicoController');

medicoRoutes.get('/', medicoController.obtenerTodos)
medicoRoutes.post('/registrar', medicoController.insertar)
medicoRoutes.get('/obtener/:id', medicoController.obtener);
medicoRoutes.put('/actualizar/:id', medicoController.actualizar);
medicoRoutes.delete('/eliminar/:id', medicoController.eliminar);
// medicoRoutes.get('/especialidades',medicoController.obtenerEspecialidades);

module.exports = medicoRoutes;