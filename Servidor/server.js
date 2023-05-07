const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')
const recepcionistaRoutes = require('./src/routes/recepcionistaRoutes')
const medicoRoutes = require('./src/routes/medicoRoutes')
const pacienteRoutes = require('./src/routes/pacienteRoutes')
const citaRoutes = require('./src/routes/citaRoutes')

const app = express()
app.set('port', process.env.PORT|| 8080)
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nimbo'
}

//Middleware
app.use(myconn(mysql, dbConfig, 'single'))
app.use(express.json())

/* Habilitacion de CORS */
const cors = require('cors');
app.use(cors());


// Rutas
app.get('/', (req, res)=>{
    res.send('Welcome')
})

app.use('/api', routes)
app.use('/api', recepcionistaRoutes)
app.use('/api', medicoRoutes)
app.use('/api', pacienteRoutes)
app.use('/api', citaRoutes)


//Ejecucion de servidor
app.listen(app.get('port'), ()=> {
    console.log('Server running on port', app.get('port'))
})