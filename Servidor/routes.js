const express = require('express')
const routes = express.Router()
const informacionGeneralRoutes = require('./src/routes/informacionGeneralRoutes')
const recepcionistaRoutes = require('./src/routes/recepcionistaRoutes')
const medicoRoutes = require('./src/routes/medicoRoutes')
const pacientesRoutes = require('./src/routes/pacienteRoutes')
const loginRoutes = require('./src/routes/loginRoutes')

const citaRoutes = require('./src/routes/citaRoutes')
const verifyToken = require('./src/controllers/authController');

const cors = require('cors');
routes.use(cors());

//Colocación de controladores de subrutas
routes.use('/informacion', verifyToken,informacionGeneralRoutes)
routes.use('/recepcionistas',verifyToken, recepcionistaRoutes)
routes.use('/medicos',verifyToken, medicoRoutes)
routes.use('/pacientes',verifyToken, pacientesRoutes)
routes.use('/citas', verifyToken,citaRoutes)
routes.use('/login', loginRoutes)

module.exports = routes;