const express = require('express')
const routes = express.Router()
const informacionGeneralRoutes = require('./src/routes/informacionGeneralRoutes')
const recepcionistaRoutes = require('./src/routes/recepcionistaRoutes')
const medicoRoutes = require('./src/routes/medicoRoutes')
const pacientesRoutes = require('./src/routes/pacienteRoutes')
const loginRoutes = require('./src/routes/loginRoutes')

const citaRoutes = require('./src/routes/citaRoutes')

const cors = require('cors');
routes.use(cors());

//Colocación de controladores de rutas
routes.use('/informacion', informacionGeneralRoutes)
routes.use('/recepcionistas', recepcionistaRoutes)
routes.use('/medicos', medicoRoutes)
routes.use('/pacientes', pacientesRoutes)
routes.use('/citas', citaRoutes)
routes.use('/login', loginRoutes)

module.exports = routes;