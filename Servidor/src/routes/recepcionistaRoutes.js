const express = require('express')
const recepcionistaRoutes = express.Router()
const recepcionistaController = require('../controllers/recepcionistaController');

/* Obtener todos los recepcionistas */
recepcionistaRoutes.get('/recepcionistas', recepcionistaController.obtenerTodos)

/* Insertar un recepcionista */
recepcionistaRoutes.post('/recepcionistas',recepcionistaController.insertar )


/* Obtener un recepcionista */
recepcionistaRoutes.get('/recepcionistas/:id',recepcionistaController.obtener );

/* Actualizar un recepcionista */
recepcionistaRoutes.put('/recepcionistas/:id', recepcionistaController.actualizar);

/* Eliminar un recepcionista */
recepcionistaRoutes.delete('/recepcionistas/:id',recepcionistaController.eliminar);

module.exports = recepcionistaRoutes;